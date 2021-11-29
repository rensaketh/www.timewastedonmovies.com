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
        this.setState({title: val});
    }

    filterCallback(val) {
        this.setState({filters: val});
    }

    render() {
        return(
            <div className="container">
                <Searchbar callback = {this.titleCallback}/>
                <AdvancedFilter callback={this.filterCallback}/>
                <MovieList searched={this.state.title} settings= {this.state.filters}/>
            </div>
        )
    }
}