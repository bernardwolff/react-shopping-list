import React, { Component } from 'react';
import ListItem from './ListItem.js';
import ItemEntry from './ItemEntry.js';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.map((item) => {return {name: item.name, bought: item.bought}})
    }
  }
  handleUserInput(itemName, bought) {
    this.setState({
      items: this.state.items.map((item) => {
        var b = item.name === itemName ? bought : item.bought;
        return {name: item.name, bought: b};
      })
    });
  }
  handleItemEntry(itemName) {
    var newItems = this.state.items.slice();
    newItems.push({name: itemName, bought: false});
    this.setState({
      items: newItems
    });
  }
  boughtEmAll() {
    return this.state.items.reduce((acum, cur) => acum && cur.bought, true);
  }
  render() {
    var items = [];
    this.state.items.forEach((item) => {
      items.push(<ListItem name={item.name} bought={item.bought} key={item.name} onUserInput={this.handleUserInput.bind(this)} />);
    });
    return (<div>
              <ItemEntry onItemEntry={this.handleItemEntry.bind(this)} />
              <ul>{items}</ul>
              <div>{"Bought 'Em All: " + this.boughtEmAll()}</div>
            </div>);
  }
}

export default ShoppingList;
