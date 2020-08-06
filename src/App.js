import React from 'react';
import Header from './Header.js';
import './App.css';
import PokemonList from './PokemonList.js';
import SearchBar from './SearchBar.js';
import request from 'superagent';


class App extends React.Component {
  state = {
    search: '',
    pokeState: [],
    searchBy: 'pokemon'
  }

  handleClick = async () => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`)

    this.setState({
      pokeState: data.body.results
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
        <PokemonList pokeState={this.state.pokeState}/>
    </div>
    );
  }
}

export default App;
