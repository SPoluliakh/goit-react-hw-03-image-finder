import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import { Overlay, Inner, CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.coseModal);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.coseModal);
    document.body.style.overflow = '';
  }

  coseModal = evt => {
    if (evt.code === 'Escape') {
      console.log(evt.code);
      this.props.closeModal();
    }
  };

  closeOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.closeOnClick}>
        <Inner>
          {this.props.children}
          <CloseBtn type="button" onClick={this.props.closeModal}>
            <ImCross size="16" />
          </CloseBtn>
        </Inner>
      </Overlay>,

      modalRoot
    );
  }
}
