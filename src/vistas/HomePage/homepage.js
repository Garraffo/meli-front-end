import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/searchbar';

import './homepage.css';

class Home extends Component{
    render(){
        return(
            <div>
                <SearchBar history={this.props.history}></SearchBar>
            </div>
        );
    }
}

export default Home;

