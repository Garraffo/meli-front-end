import React, { Component } from 'react';
import './searchbar.css';

class SearchBar extends Component {
    render() {
      return (
        <div>
          <input type="text" placeholder="Nunca dejes de buscar"></input>
          <button type="submit" className="botonBusqueda">Buscar
          </button>
        </div>
      );
    }
  }
  
  export default SearchBar;