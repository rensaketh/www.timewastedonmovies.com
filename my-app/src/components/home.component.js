import React, { Component } from 'react';
import AdvancedFilter from './advancedfilter.component';
import Searchbar from './searchbar.component';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
        this.titleCallback = this.titleCallback.bind(this);
    }

    titleCallback(val) {
        this.setState({title: val});
    }
    render() {
        return(
            <div className="container">
                <Searchbar callback = {this.titleCallback}/>
                <AdvancedFilter searched={this.state.title}/>
            </div>
        )
    }
}