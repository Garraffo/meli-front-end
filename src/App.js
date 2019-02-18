import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //router para acceder a distintas vistas
import Home from './vistas/HomePage/homepage';
import VistaBusquedaProductos from './vistas/busquedaProductos/vistaBusquedaProductos';
import VistaDetalleProducto from './vistas/DetalleProducto/vistaDetalleProducto';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/items" component={VistaBusquedaProductos}></Route>
          <Route exact path="/items/:id" component={VistaDetalleProducto}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
