import React, { Component } from 'react';
import axios from 'axios';
import { MovieItem } from './movieitem.component';
export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {movies: []};
  }
/*
  componentDidMount() {
    axios.get('http://localhost:5000/movies/')
      .then(response => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  */
  MovieList() {
      /*
    return this.state.exercises.map(currentexercise => {
        return <MovieItem exercise={currentexercise} key={currentexercise._id}/>;
      })
      */
     return "";
  }
  render() {
      if(this.MovieList() === "") 
      return (
          <h1>empty</h1>
      );
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {
                this.MovieList()
              }

          </tbody>
        </table>
      </div>
    )
  }
}