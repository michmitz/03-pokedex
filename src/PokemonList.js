import React, { Component } from 'react'

export default class PokemonList extends Component {
    render() {
        return (
            <div>
                {
                this.props.pokeState.map((poke) => <PokemonItem key={poke._id} pokemon={poke.pokemon}/>)
            }   
            </div>
        )
    }
}

export class PokemonItem extends Component {
    render() {
        return (
            <div className="image-container">
                <p className="image-title">{this.props.pokeState.pokemon}</p>
                <img src={this.props.pokeState.url_image} alt=''/>
            </div>
        )
    }
}

