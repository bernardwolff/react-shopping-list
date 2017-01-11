import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem.js';

class App extends Component {
	constructor() {
    super();
    this.state = {
			items: [
				{name: 'bread', done: 'X'},
				{name: 'milk', done: ''},
				{name: 'eggs', done: ''}
			]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rudimentary Shopping List</h2>
        </div>
        <ul>
					<ListItem name={this.state.items[0].name}
						done={this.state.items[0].done}
						onClick={this.handleClick(0)} />
					<ListItem name={this.state.items[1].name}
						done={this.state.items[1].done}
						onClick={this.handleClick(1)} />
					<ListItem name={this.state.items[2].name}
						done={this.state.items[2].done}
						onClick={this.handleClick(2)} />
        </ul>
      </div>
    );
  }
	handleClick(i) {
		const items = this.state.items.slice();
		items[i].done = 'Y';
		this.setState({items: items});
	}
}

export default App;
