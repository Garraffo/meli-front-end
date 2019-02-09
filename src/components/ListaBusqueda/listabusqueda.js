import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchbar';
import { parse } from 'qs';

class ListaBusqueda extends Component{
    constructor(props) {
        super(props);
    
        let initialProducts = [];
        let initialCategories = [];
        
        this.state = {
          products: initialProducts,
          categories: initialCategories
         };
      }
    

    componentDidMount(){
        const search = parse(this.props.location.search.substr(1));
        console.log(search);
        this.setState({ search, products: [], categories: []});
        

        ListaBusqueda.getProducts(search.search)
        .then((data)=>{
            console.log(data);
        })

    }

    static getProducts(search){
        let url = "https://api.mercadolibre.com/sites/MLA/search?q=:" + search + "&limit=4";
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

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