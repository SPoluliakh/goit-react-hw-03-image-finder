import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetch } from '../Fetch/fetch';
import { LoadMoreBtn } from '../LoadMorBtn/LoadMoreBtn';
import { PendingVew } from '../ImageGallery/PendingVew/PendingVew';

export class App extends Component {
  state = {
    name: '',
    pageNumber: 1,
    response: [],
    status: 'idle',
    isModalOpen: false,
    showModalInfo: [],
    loadMoreBtn: false,
  };

  async componentDidUpdate(_, prevState) {
    const { name, pageNumber } = this.state;
    if (prevState.name !== name || prevState.pageNumber !== pageNumber) {
      try {
        this.setState({ status: 'pending' });
        const data = await fetch(name, pageNumber);
        this.setState(prevState => ({
          response: [...prevState.response, ...data.hits],
          status: 'resolved',
          loadMoreBtn: true,
        }));

        if (pageNumber === Math.ceil(data.totalHits / 12)) {
          return this.setState({
            loadMoreBtn: false,
          });
        }
      } catch (error) {
        this.setState({
          status: 'rejected',
        });
        console.log(error);
      }
    }
  }

  onSubmit = info => {
    this.setState({
      name: info,
      pageNumber: 1,
      response: [],
      status: 'pending',
    });
  };

  handleCount = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  openleModal = evt => {
    const alt = evt.currentTarget.alt;
    const { response } = this.state;
    const id = response.filter(res => res.tags === alt);
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      showModalInfo: [...id],
    }));
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { response, name, status, isModalOpen, showModalInfo, loadMoreBtn } =
      this.state;

    if (status === 'idle') {
      return (
        <>
          <Searchbar onSubmit={this.onSubmit} />
          <p>Enter your word</p>
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <Searchbar onSubmit={this.onSubmit} />
          <p>
            No <b>{name}</b> photos, pls,try another word
          </p>
        </>
      );
    }

    if (status === 'pending') {
      return (
        <>
          <Searchbar onSubmit={this.onSubmit} />
          <ImageGallery
            searchInfo={response}
            openleModal={this.openleModal}
            isModalOpen={isModalOpen}
            showModalInfo={showModalInfo}
            closeModal={this.closeModal}
          />
          <PendingVew />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <Searchbar onSubmit={this.onSubmit} />
          <ImageGallery
            searchInfo={response}
            openModal={this.openleModal}
            isModalOpen={isModalOpen}
            showModalInfo={showModalInfo}
            closeModal={this.closeModal}
          />
          {loadMoreBtn && <LoadMoreBtn onClick={this.handleCount} />}
        </>
      );
    }
  }
}
