import React from 'react';
import Header from './Header.js';
import './App.css';
import PokemonList from './PokemonList.js';
import SearchBar from './SearchBar.js';
import request from 'superagent';


class App extends React.Component {
  state = {
    search: '',
    pokeState: []
  }

  handleClick = async () => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`)

    this.setState({
      pokeState: data.body.results
    })
    console.log(this.state.pokeState)
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
  return (
    <div className="App">
      <Header/>
        <SearchBar handleClick={this.handleClick} handleChange={this.handleChange}/>
        <PokemonList pokeState={this.state.pokeState}/>
    </div>
    );
  }
}

export default App;
