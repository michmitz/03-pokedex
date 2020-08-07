import React from 'react';
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
    isLoading: false,
    currentPage: 1
  }

  handleClick = async () => {
    this.setState({
      isLoading: true 
    })

    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`)

    this.setState({
      pokeState: data.body.results,
      isLoading: false
    })

    console.log(this.state.pokeState)
  }

  handleNextClick = () => {
    this.setState({ currentPage: this.state.currentPage + 1 })
  }

  handlePrevClick = () => {
    this.setState({ prevPage: this.state.prevPage - 1 })
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSearchBy = (e) => {
    this.setState({ searchBy: e.target.value })
  }

  render() {
  return (
    <div className="search-container">
        <SearchBar handleClick={this.handleClick} handleChange={this.handleChange} handleSearchBy={this.handleSearchBy}/>
        
        {
        this.state.isLoading ? <p>Loading</p> :
        <PokemonList handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} currentPage={this.state.currentPage} pokeState={this.state.pokeState}/>
        }

    </div>
    );
  }
}

export default SearchPage;
