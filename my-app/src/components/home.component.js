import React, { Component } from 'react';
import AdvancedFilter from './advancedfilter.component';
import MovieList from './movielist.component';
import Searchbar from './searchbar.component';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            filters: []
        };
        this.titleCallback = this.titleCallback.bind(this);
        this.filterCallback = this.filterCallback.bind(this);
    }

    titleCallback(val) {
        console.
        this.setState({title: val});
    }

    filterCallback(val, name) {
        this.setState({filters: {
            [name]: val
        }});
    }

    render() {
        return(
            <div className="container">
                <Searchbar callback = {this.titleCallback}/>
                <AdvancedFilter searched={this.state.title} callback={this.filterCallback}/>
                <MovieList settings= {this.state.filters}/>
            </div>
        )
    }
}