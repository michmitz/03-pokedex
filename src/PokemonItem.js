import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class PokemonItem extends Component {
    render() {
        return (
            <Link to={`/detail/${this.props.name}`}>
                <p className="image-title">{this.props.pokemon}</p>
                <img src={this.props.image} alt=''/>
            </Link>
        )
    }
}