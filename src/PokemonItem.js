import React, { Component } from 'react'


export default class PokemonItem extends Component {
    render() {
        return (
            <div className="image-container">
                <p className="image-title">{this.props.pokemon}</p>
                <img src={this.props.image} alt=''/>
            </div>
        )
    }
}