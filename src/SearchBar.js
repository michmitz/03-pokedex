import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input onChange={this.props.handleChange}/>
                <button onClick={this.props.handleClick}>Search</button>
            </div>
        )
    }
}
