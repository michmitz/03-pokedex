import React, { Component } from 'react'
import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        return (
            <div>
                {
                this.props.pokeState.map((poke) => <PokemonItem key={poke.species_id} name={poke.pokemon}/>)
            }   
            </div>
        )
    }
}

