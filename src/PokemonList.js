import React, { Component } from 'react'
import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        return (
            <div className="pokemon-list">
                {
                    this.props.pokeState.length > 0 && 
                    <div>
                        <button onClick={this.props.handlePrevClick}>Prev</button>
                        <button onClick={this.props.handleNextClick}>Next</button>
                        {this.props.currentPage}
                    </div>
                }
                
                {
                this.props.pokeState.map((poke) => <PokemonItem key={poke._id} name={poke.pokemon} image={poke.url_image}/>)
            }   
            </div>
        )
    }
}

