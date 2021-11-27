import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/*
const Movie = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)
*/
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

  exerciseList() {
      console.log(this.props.filters);
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} key={currentexercise._id}/>;
    })
  }
*/
  MovieList() {
      console.log(this.props.settings);
  }
  render() {
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