import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

module.exports = ListItem;
