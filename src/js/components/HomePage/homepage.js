import React, { Component } from 'react';
import './homepage.css';
import SearchBar from '../SearchBar/searchbar';

class Home extends Component{
    render(){
        return(
            <div>
                <SearchBar></SearchBar>
                <div className='home'></div>
            </div>
        );
    }
}

export default Home;

