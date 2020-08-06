import React from 'react';
import Header from '../Header.js';
import '../App.css';
import './SearchPage.css';
import PokemonList from '../PokemonList.js';
import SearchBar from '../SearchBar.js';
import request from 'superagent';


class SearchPage extends React.Component {
  state = {
    search: '',
    pokeState: [],
    searchBy: 'pokemon',
    isLoading: false
  }

  handleClick = async () => {
    this.setState({
      isLoading: true 
    })

    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`)

    this.setState({
      pokeState: data.body.results,
      isLoading: false
    })

    console.log(this.state.pokeState)
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSearchBy = (e) => {
    this.setState({ searchBy: e.target.value })
  }

  render() {
  return (
    <div className="App">
      <Header/>
        <SearchBar handleClick={this.handleClick} handleChange={this.handleChange} handleSearchBy={this.handleSearchBy}/>
        
        {
        this.state.isLoading ? <p>Loading</p> :
        <PokemonList pokeState={this.state.pokeState}/>
        }

    </div>
    );
  }
}

export default SearchPage;
