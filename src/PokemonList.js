import React, { Component } from 'react'
import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        const {
            pokeState,
            currentPage,
            handlePrevClick,
            handleNextClick,
            totalPages
        } = this.props;
        
        return (
            <div className="pokemon-list">
                {
                    pokeState.length > 0 && 
                    <div>
                        {
                        currentPage !== 1 &&
                        <button onClick={handlePrevClick}>Prev</button>
                        }
                        {   
                        currentPage !== totalPages &&
                        <button onClick={handleNextClick}>Next</button>
                        }
                        {currentPage} of {totalPages}
                    </div>
                }
                
                {
                this.props.pokeState.map((poke) => <PokemonItem key={poke._id} name={poke.pokemon} image={poke.url_image}/>)
            }   
            </div>
        )
    }
}

