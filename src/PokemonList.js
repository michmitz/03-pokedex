import React, { Component } from 'react'
import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        return (
            <div className="pokemon-list">
                {
                    this.props.pokeState.length > 0 && 
                    <div>
                        {
                        this.props.currentPage !== 1 &&
                        <button onClick={this.props.handlePrevClick}>Prev</button>
                        }
                        {   
                        this.props.currentPage !== this.props.totalPages &&
                        <button onClick={this.props.handleNextClick}>Next</button>
                        }
                        {this.props.currentPage} of {this.props.totalPages}
                    </div>
                }
                
                {
                this.props.pokeState.map((poke) => <PokemonItem key={poke._id} name={poke.pokemon} image={poke.url_image}/>)
            }   
            </div>
        )
    }
}

