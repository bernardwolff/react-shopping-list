import React, { Component } from 'react';

class ItemEntry extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.onItemEntry(
      this.itemEntryInput.value
    );
    this.itemEntryInput.value = '';
  }
  render() {
    return (<div>
          <input
            type="text"
            value={this.props.itemEntryText}
            ref={(input) => this.itemEntryInput = input}
          />
        <button onClick={this.handleChange}>Add</button></div>);
  }
}

export default ItemEntry;
