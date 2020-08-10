import React, { Component } from 'react'
import './App.css'

export default class SearchBar extends Component {
    render() {
        const {
            handleChange,
            handleClick,
            search,
            searchBy,
            handleSearchBy
        } = this.props;

        return (
            <div className="search-div">
                <input onChange={handleChange} value={search}/>
                
                <div className="search-by-div">
                <p className="search-by">Search By:</p>
                <select onChange={handleSearchBy} value={searchBy}>
                    <option value='pokemon'>name</option>
                    <option value='type'>type</option>
                    <option value='attack'>attack</option>
                    <option value='defense'>defense</option>
                </select>
                </div>

                <button className="search-button" onClick={handleClick}>Search</button>
            </div>
        )
    }
}
