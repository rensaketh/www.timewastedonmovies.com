const Movie = require('./movie');
class graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(newMovie) {
        if(!this.adjList.has(newMovie)) {
            this.adjList.set(newMovie, []);
        }
    }

    addEdge(movieA, movieB) {
        if(!this.adjList.get(movieA).includes(movieB)) {
            this.adjList.get(movieA).push(movieB);
        }
        if(!this.adjList.get(movieB).includes(movieA)) {
            this.adjList.get(movieB).push(movieA);
        }
    }

    
}