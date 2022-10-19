import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { fetch } from '../Fetch/fetch';
import { Idle } from '../Statuses/Idle/Idle';
import { Rejected } from '../Statuses/Rejected/Rejected';
import { Pending } from '../Statuses/Pending/Pending';
import { Resolve } from '../Statuses/Resolve/Resolve';

export class App extends Component {
  state = {
    name: '',
    pageNumber: 1,
    response: [],
    status: 'idle',
    isModalOpen: false,
    showModalInfo: [],
    loadMoreBtn: false,
    autoScroll: false,
    totalImgInfo: false,
  };

  async componentDidUpdate(_, prevState) {
    const { name, pageNumber, autoScroll, totalImgInfo } = this.state;
    if (prevState.name !== name || prevState.pageNumber !== pageNumber) {
      try {
        const data = await fetch(name, pageNumber);

        if (totalImgInfo) {
          toast.success(`Yahoooo, we finded ${data.totalHits} photos`);
        }

        this.setState(prevState => ({
          response: [...prevState.response, ...data.hits],
          status: 'resolved',
          loadMoreBtn: true,
          autoScroll: true,
          totalImgInfo: false,
        }));

        if (pageNumber === Math.ceil(data.totalHits / 12)) {
          toast.info('You have seen all photos ');
          return this.setState({
            loadMoreBtn: false,
          });
        }
      } catch (error) {
        this.setState({
          status: 'rejected',
        });
        toast.warn(
          ' Sorry, there are no images matching your search query. Please try again.'
        );
        console.log(error);
      }
    }
    if (autoScroll) {
      this.windowScroll();
    }
  }

  windowScroll = () => {
    window.scrollBy({
      top: 220,
      left: 0,
      behavior: 'smooth',
    });
  };

  onSubmit = info => {
    this.setState({
      name: info,
      pageNumber: 1,
      response: [],
      status: 'pending',
      totalImgInfo: true,
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
      autoScroll: false,
    }));
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { response, status, isModalOpen, showModalInfo, loadMoreBtn } =
      this.state;

    if (status === 'idle') {
      return (
        <>
          <Idle onSubmit={this.onSubmit} />
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <Rejected onSubmit={this.onSubmit} />
        </>
      );
    }

    if (status === 'pending') {
      return (
        <>
          <Pending
            onSubmit={this.onSubmit}
            searchInfo={response}
            openleModal={this.openleModal}
            isModalOpen={isModalOpen}
            showModalInfo={showModalInfo}
            closeModal={this.closeModal}
          />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <Resolve
            onSubmit={this.onSubmit}
            searchInfo={response}
            openModal={this.openleModal}
            isModalOpen={isModalOpen}
            showModalInfo={showModalInfo}
            closeModal={this.closeModal}
            loadMoreBtn={loadMoreBtn}
            handleCount={this.handleCount}
          />
        </>
      );
    }
  }
}
