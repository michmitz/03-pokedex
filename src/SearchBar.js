import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input onChange={this.props.handleChange}/>
                <select onChange={this.props.handleSearchBy}>
                    <option value='pokemon'>name</option>
                    <option value='type'>type</option>
                    <option value='attack'>attack</option>
                    <option value='defense'>defense</option>
                </select>

                <button onClick={this.props.handleClick}>Search</button>
            </div>
        )
    }
}
