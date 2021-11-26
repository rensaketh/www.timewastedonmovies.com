class graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(newMovie) {
        this.adjList.set(newMovie, []);
    }

    addEdge(movieA, movieB) {
        this.adjList.get(movieA).push(movieB);
        this.adjList.get(movieB).push(movieA);
    }
}