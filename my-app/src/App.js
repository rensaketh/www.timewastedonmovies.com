import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home.component';
import axios from 'axios';
//import graph from './components/data structures/graph';

const Movie = require('./components/data structures/movie');

class graph {
    constructor() {
        this.adjList = new Map([[String.prototype, [String.prototype]]]);
    }

    addVertex(newMovie) {
        //console.log(newMovie.type);
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
    //console.log("Hi");
    axios.get('/movies')
        .then((response) => {
            //console.log("hi");
            //console.log(response.data);
            //console.log(response.status);
            //console.log(response.statusText);
            //console.log(response.headers);
            //console.log(response.config);
            let database = response.data;
            function intersection(firstItem, secondItem) {
                let setA = new Set(firstItem.split(', '));
                let setB = new Set(secondItem.split(', '));
                let intersection = new Set([...setA].filter(x => setB.has(x)));
                return Array.from(intersection);
            }

            function calculateWeight(movieA, movieB) {
                let common = intersection(movieA.genre, movieB.genre);
                let diffGenre = movieA.genre.split(', ').length - common.length;
                let diffRating = Math.abs(parseFloat(movieA.weighted_average_vote) - parseFloat(movieB.weighted_average_vote));
                let weight = 100 - (10 * diffGenre) - (0.5 * diffRating) - 8;
                if (intersection(movieA.director,movieB.director).length > 0) {
                    weight += 3;
                }
                if (movieA.language[0] == movieB.language[0]) {
                    weight += 5;
                }
                if (Math.abs(parseInt(movieA.year) - parseInt(movieB.year)) > 10) {
                    weight -= 8;
                }
                return weight;
            }

            let movieGraph = new graph();

            for (let i = 0; i < database.length; i++) {
                let movieA = database[i];
                //console.log(movieA);
                let lowestWeight = 150;
                let highestWeightedMovies = [];
                let movieIDA = movieA.imdb_title_id;
                //console.log(typeof movieIDA);
                movieGraph.addVertex(movieIDA);
                for (let j = i + 1; j < database.length; j++) {
                    let movieB = database[j];
                    let weight = calculateWeight(movieA, movieB);

                    movieGraph.addVertex(movieB.imdb_title_id);

                    let adjacentMovies = {
                        adjacentID: movieB.imdb_title_id,
                        adjacentWeight: weight
                    };
                    //need to figure out how to keep running total of 5 maximum weights
                    if (highestWeightedMovies.length < 5) {
                        if(lowestWeight > weight) {
                            lowestWeight = weight;
                        }
                        highestWeightedMovies.push(adjacentMovies);
                        highestWeightedMovies.sort((a, b) => (a.adjacentWeight > b.adjacentWeight) ? 1 : -1);
                    } else if(weight > lowestWeight) {
                        //if(weight > lowestWeight) need to replace a movie in the list
                        highestWeightedMovies.shift();
                        highestWeightedMovies.push(adjacentMovies);
                        highestWeightedMovies.sort((a, b) => (a.adjacentWeight > b.adjacentWeight) ? 1 : -1);
                        lowestWeight = highestWeightedMovies.at(-1).adjacentWeight;
                    }
                }
                for (const element of highestWeightedMovies) {
                    movieGraph.addEdge(movieIDA, element.adjacentID);
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
