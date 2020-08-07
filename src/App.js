import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
          <>
          <div className={'box'}>
                <Router>
                    <header>
                      <li>
                        <Link to="/detail">Detail</Link>
                      </li>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                    </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:myPokemonName" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
            </>
        )
    }
}