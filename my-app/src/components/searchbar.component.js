import React, { Component } from 'react';

export default class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value},
            () => {
                this.props.callback(this.state.value);
            });
    }

    render() {
        return (
            <div class='container'>
                <h3>Look for movies</h3>
            <label>Search Title</label>
            <input type="text"
              required
              className="form-control"
              value={this.state.value}
              onChange={this.handleChange}
              />
            </div>      
        );
    }
}