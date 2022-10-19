import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FcBinoculars } from 'react-icons/fc';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SerchFormInput,
} from './Searchbar.style';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

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
    const searchInfo = evt.currentTarget.elements.searchInfo.value;
    if (searchInfo.trim() === '') {
      return toast.warn('You must enter a keyword');
    }
    this.props.onSubmit(this.state.searchInfo);
    this.reset();
  };

  reset = () => {
    this.setState({ searchInfo: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormBtn type="submit">
            <FcBinoculars size="20" />
          </SearchFormBtn>

          <SerchFormInput
            value={this.state.searchInfo}
            name="searchInfo"
            onChange={this.inputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
