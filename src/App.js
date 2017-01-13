import React, { Component } from 'react';
import './App.css';
import ShoppingList from './ShoppingList.js';

var items = [
	{name: 'milk', bought: false},
	{name: 'bread', bought: false},
	{name: 'eggs', bought: false}
];

class App extends Component {
  render() {
    return (
				<div className="App">
					<div className="App-header">
      			<h2>Rudimentary Shopping List</h2>
					</div>
					<ShoppingList items={items} />
				</div>
    );
  }
}

export default App;
