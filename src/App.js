import React from 'react';
import Header from './Header.js';
import './App.css';
// import PokemonList from './PokemonList.js';

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="input-div">
          <input/>
          <button className="button">Search</button>
        </div>
    </div>
  );
}

export default App;
