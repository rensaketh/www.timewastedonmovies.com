import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home.component';
import axios from 'axios';
//import graph from './components/data structures/graph';

const Movie = require('./components/data structures/movie');

class graph {
    constructor() {
        this.adjList = new Map();
    }

    static addVertex(newMovie) {
        if (!this.adjList.has(newMovie)) {
            this.adjList.set(newMovie, []);
        }
    }

    addEdge(movieA, movieB) {
        if (!this.adjList.get(movieA).includes(movieB)) {
            this.adjList.get(movieA).push(movieB);
        }
        if (!this.adjList.get(movieB).includes(movieA)) {
            this.adjList.get(movieB).push(movieA);
        }
    }

}

function App() {
    console.log("Hi");
    axios.get('/movies')
        .then((response) => {
            console.log("hi");
            //console.log(response.data);
            //console.log(response.status);
            //console.log(response.statusText);
            //console.log(response.headers);
            //console.log(response.config);
            let database = response.data
            function intersection(firstItem, secondItem) {
                let compareSet = new Set(secondItem);
                return firstItem.filter(item => compareSet.has(item));
            }

            function calculateWeight(movieA, movieB) {
                let common = intersection(movieA.genres, movieB.genres);
                let weight = 100 - 10 * (movieA.genres.size - common.size) - 0.5 * (Math.abs(movieA.weighted_rating - movieB.weighted_rating)) - 8;
                if (movieA.director == movieB.director) {
                    weight += 3;
                }
                if (movieA.language == movieB.language) {
                    weight += 5;
                }
                if (Math.abs(movieA.year - movieB.year) > 10) {
                    weight -= 8;
                }
                return weight;
            }

            let movieGraph = new graph();

            for (let i = 0; i < database.length; i++) {
                let movieA = database[i];
                console.log(movieA);
                let lowestWeight = 150;
                let lowestMovie;
                let highestWeightedMovies = [];
                console.log(movieA.imdb_title_id);
                graph.addVertex(movieA.imdb_title_id);
                for (let j = i + 1; j < database.length; j++) {
                    let movieB = database[j];
                    let weight = calculateWeight(movieA, movieB);

                    movieGraph.addVertex(movieB.imdb_title_id);

                    //need to figure out how to keep running total of 5 maximum weights
                    if (highestWeightedMovies.size < 5) {
                        let adjacentMovies = {
                            adjacentWeight: weight,
                            adjacentID: movieB.ID
                        };
                        highestWeightedMovies.push(movieB);
                        if (lowestWeight > weight) {
                            lowestWeight = weight;
                            lowestMovie = movieB;
                        }
                    } else {
                        //if(weight > lowestWeight) need to replace a movie in the list
                    }
                }
                for (const element of highestWeightedMovies) {
                    movieGraph.addEdge(movieA, element);
                }
            }
        });
    /*axios.get('/movies').then(resp => {

        console.log(resp.data);
    });*/
    console.log("hi");
    return (
        <Router>
            <Home/>
        </Router>
    );
}

export default App;
