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
    event.preventDefault();
    if (this.state.search) {
      this.props.history.push('/listabusqueda');
    }
  }

    render() {
      return (
        <div>
          <header className="header">
            <form onSubmit={this.submitHandler} onChange={this.handleInput} className="contentHeader">
           
                <input type="text" placeholder="Nunca dejes de buscar" className="input"></input>
                
                <button type="submit">
                  <img src={icoLupa} alt='' />
                </button>

              
            </form>
            </header>
        </div>
      );
    }
  }
  
  export default SearchBar;