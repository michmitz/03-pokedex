import React from 'react';
import Header from './Header.js';
import './App.css';
// import request from 'superagent';
// import PokemonList from './PokemonList.js';






class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Header/>
        <div className="input-div">
          <input/>
          <button className="button">Search</button>
          {/* <PokemonList pokeState={this.state.pokeState}/> */}
        </div>
    </div>
    );
  }
}

export default App;
