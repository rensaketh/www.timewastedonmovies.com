import React, { Component } from 'react';
import axios from 'axios';
export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {movies: []};
    //props.settings reaches here
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

  exerciseList() {
      console.log(this.props.filters);
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} key={currentexercise._id}/>;
    })
  }
*/
  MovieList() {
    /*
    return this.state.exercises.map(currentexercise => {
        return <MovieItem exercise={currentexercise} key={currentexercise._id}/>;
      })
      */
     console.log(this.props.searched);
     console.log(this.props.settings);
     return "";
  }
  render() {
    if(this.MovieList()===""){
      return (
        <div>
          <h1>this.props.settings</h1>
        </div>
      );
    }
    return (
      this.MovieList()
      /*
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
      */
    )
  }
}