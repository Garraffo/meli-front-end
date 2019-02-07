import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchbar';

class ListaBusqueda extends Component{

    render(){
        return(
            <div>
                <SearchBar history={this.props.history}></SearchBar>
                <div>
                    <h1>Esta es una lista de busqueda</h1>
                </div>
            </div>
        );
    }
}

export default ListaBusqueda;