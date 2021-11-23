import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {    
        this.setState({value: event.target.value});
        console.log( event.target.value);  }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        );
    }
}

export default Search;