import React, { Component } from 'react';
import logo from './nba_logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Tiles from './components/tile';
import PlayerForm from './components/addPlayerForm';
import EditPlayer from './components/editPlayer';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <section className="App">
            <header className="App-header">
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
              </Link>
            </header>
            <Route exact path="/" component={Tiles} />
            <Route exact path="/addPlayer" component={PlayerForm} />
            <Route exact path="/editPlayer" component={EditPlayer} />
          </section>
        </Router>
      </Provider>
    );
  }
}

export default App;
