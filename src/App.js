import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rudimentary Shopping List</h2>
        </div>
        <ul>
					<ListItem name="bread" />
					<ListItem name="milk" />
					<ListItem name="eggs" />
        </ul>
      </div>
    );
  }
}

export default App;
