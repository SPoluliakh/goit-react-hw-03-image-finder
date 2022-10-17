import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchInfo: '',
  };

  inputChange = evt => {
    this.setState({
      searchInfo: evt.currentTarget.value,
    });
  };

  onSubmit = evt => {
    evt.preventDefault();

    if (evt.currentTarget.elements.searchInfo.value.trim() === '') {
      return alert('need some word');
    }
    this.props.onSubmit(this.state.searchInfo);
    this.reset();
  };

  reset = () => {
    this.setState({ searchInfo: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.onSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            value={this.state.searchInfo}
            name="searchInfo"
            onChange={this.inputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
