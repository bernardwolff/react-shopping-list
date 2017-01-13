import React, { Component } from 'react';
import ListItem from './ListItem.js';

class ShoppingList extends Component {
  render() {
    var items = [];
    this.props.items.forEach((item) => {
      items.push(<ListItem name={item.name} bought={item.bought} key={item.name} />);
    });
    return (<ul>{items}</ul>);
  }
}

export default ShoppingList;
