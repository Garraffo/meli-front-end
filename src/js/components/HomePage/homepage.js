import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchbar';

import './homepage.css';

class Home extends Component{
    render(){
        return(
            <div>
                <SearchBar history={this.props.history}></SearchBar>
                <div className='home'></div>
            </div>
        );
    }
}

export default Home;

