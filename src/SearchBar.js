import React, { Component } from 'react'
import './App.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-div">
                <input onChange={this.props.handleChange} value={this.props.search}/>
                
                <div className="search-by-div">
                <p className="search-by">Search By:</p>
                <select onChange={this.props.handleSearchBy} value={this.props.searchBy}>
                    <option value='pokemon'>name</option>
                    <option value='type'>type</option>
                    <option value='attack'>attack</option>
                    <option value='defense'>defense</option>
                </select>
                </div>

                <button onClick={this.props.handleClick}>Search</button>
            </div>
        )
    }
}
