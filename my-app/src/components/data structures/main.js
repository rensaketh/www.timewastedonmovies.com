const MovieGraph = require('../models/graph.js');


function intersection(firstItem, secondItem)
{
    let compareSet = new Set(second);
    return first.filter(item => compareSet.has(item));
}

function calculateWeight(movieA, movieB) {
    let common = intersection(movieA.genres, movieB.genres);
    let weight = 100 - 10(movieA.genres.size - common.size) - 0.5(Math.abs(movieA.weighted_rating - movieB.weighted_rating)) - 8;
    if(movieA.director == movieB.director) {
        weight += 3;
    }
    if(movieA.language == movieB.language) {
        weight += 5;
    }
    if(Math.abs(movieA.year - movieB.year) > 10) {
        weight -= 8;
    }
    return weight;
}
let graph = new MovieGraph();

for(let i = 0; i < database.length; i++) {
    let movieA = database[i];
    let lowestWeight = 150;
    let lowestMovie;
    let highestWeightedMovies = [];
    graph.addVertex(movieA);
    for(let j = i + 1; j < database.length; j++) {
        let movieB = database[j];
        let weight = calculateWeight(movieA, movieB);

        graph.addVertex(movieB);

        //need to figure out how to keep running total of 5 maximum weights
        if(highestWeightedMovies.size < 5) {
            highestWeightedMovies.push(movieB);
            if(lowestWeight > weight) {
                lowestWeight = weight;
                lowestMovie = movieB;
            }
        }
        else {
            //if(weight > lowestWeight) need to replace a movie in the list
        }
    }
    for(const element of highestWeightedMovies) {
        graph.addEdge(movieA, element);
    }
}

