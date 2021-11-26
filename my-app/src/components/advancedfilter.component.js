import React, { Component } from 'react';

export default class AdvancedFilter extends Component {
    constructor(props) {
        super(props);

        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeGraph = this.onChangeGraph.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            graph:null,
            duration:0,
            genre:'',
            rating:0.0,
            year:0,
        }
    }
    onSubmit(val) {
        val.preventDefault();

        const movie = {
            name: this.props.searched,
            genre: this.state.genre,
            duration: this.state.duration,
            year: this.state.year,
            rating:this.state.rating
        }

        //window.location = '/';
        console.log(movie);
    }
    onChangeGenre(val) {
        this.setState({
            genre: val.target.value
        })
    }
    onChangeDuration(val) {
        this.setState({
            duration: val.target.value
        })
    }
    onChangeGraph(val) {
        this.setState({
            graph: val.target.value
        })
    }
    onChangeRating(val) {
        this.setState({
            rating: val.target.value
        })
    }
    onChangeYear(val) {
        this.setState({
            year: val.target.value
        })
    }
    render() {
        return (
            <div>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Genre </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
              />
        </div>
        <div className="form-group"> 
          <label>Duration </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
              />
        </div>
        <div className="form-group"> 
          <label>Rating</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.rating}
              onChange={this.onChangeRating}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
}