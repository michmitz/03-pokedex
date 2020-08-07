import React, { Component } from 'react'
import request from 'superagent'
import '../App.css'
import './DetailPage.css'

export default class DetailPage extends Component {
    state = { pokemon: null }

    componentDidMount = async () => {
        const name = this.props.match.params.myPokemonName;

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);

        const pokemon = data.body.results[0];

        this.setState({ pokemon: pokemon })
    }

    render() {
        const { pokemon } = this.state;

        return (
            <div className='pokemon-details-div'>
                {
                    pokemon 
                        ? <div>
                        <p>{pokemon.pokemon}</p>
                        <p>Defense: {pokemon.defense}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <img src={pokemon.url_image} alt='' />
                    </div>
                        : <h1>loading</h1>
                }
            </div>
        )
    }
}