import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value}); 
        console.log(event.target.value); 
    }

    render() {
        return (
            <input type="text" value={this.state.value} 
                onChange={this.handleChange} />      
        );
    }
}