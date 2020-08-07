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

  componentDidMount = async () => {
    const params = new
    URLSearchParams(this.props.location.search);

    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');

    console.log('searchBy, page, search', searchBy, page, search)

    if (searchBy && page && search)
    await this.setState ({
      searchBy: searchBy,
      currentPage: page,
      search: search
    })

    await this.makeRequest()
  }

  makeRequest = async () => {
    this.setState({
      isLoading: true 
    })

    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`)

    this.setState({
      pokeState: data.body.results,
      isLoading: false
    })

    const params = new URLSearchParams(this.props.location.search);

    params.set('search', this.state.search);
    params.set('searchBy', this.state.searchBy);
    params.set('page', this.state.currentPage);


    this.props.history.push('?' + params.toString())

    console.log(this.state.pokeState)

  }

  handleClick = async () => {
    await this.makeRequest()
  }

  handleNextClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

    await this.makeRequest()
  }

  handlePrevClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) - 1 })

    await this.makeRequest()
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
        <SearchBar handleClick={this.handleClick} handleChange={this.handleChange} handleSearchBy={this.handleSearchBy} search={this.state.search} searchBy={this.state.searchBy}/>
        
        {
        this.state.isLoading ? <p>Loading</p> :
        <PokemonList handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} currentPage={this.state.currentPage} pokeState={this.state.pokeState}/>
        }

    </div>
    );
  }
}

export default SearchPage;
