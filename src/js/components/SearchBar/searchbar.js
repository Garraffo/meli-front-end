import React, { Component } from 'react';
import './searchbar.css';
import icoLupa from './ic_Search.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(event) {
    const target = event.target;
    this.setState({
      search: target.value,
    });
  }

  submitHandler(event) {
    alert(this.state.search);
  }

    render() {
      return (
        <div>
          <form onSubmit={this.submitHandler} onChange={this.handleInput}>
            <input type="text" placeholder="Nunca dejes de buscar"></input>
            <button type="submit">
              <img src={icoLupa} alt='' />
            </button>
          </form>
        </div>
      );
    }
  }
  
  export default SearchBar;