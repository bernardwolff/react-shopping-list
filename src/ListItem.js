import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return <li>{this.props.name} <span>{this.props.bought}</span></li>;
  }
}

export default ListItem;
