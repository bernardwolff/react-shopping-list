import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.onUserInput(
      this.props.name,
      this.boughtInput.checked
    );
  }
  render() {
    return <li>
              <span>{this.props.name}</span>
              <span>{this.props.bought}</span>
              <input
                type="checkbox"
                checked={this.props.bought}
                ref={(input) => this.boughtInput = input}
                onChange={this.handleChange}
              />
           </li>;
  }
}

export default ListItem;
