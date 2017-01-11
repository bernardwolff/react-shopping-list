import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return <li>{this.props.name} <span>{this.props.done}</span></li>;
  }
}

module.exports = ListItem;
