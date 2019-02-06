import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Nunca dejes de buscar"></input>
        <button type="submit" class="btn btn-primary">
          <i class="icon-user icon-white"></i>
        </button>
      </div>
    );
  }
}

export default App;
