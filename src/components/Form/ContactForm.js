import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Box } from '../../components/Box';
import {
  ContactFrm,
  FormLabel,
  FormInput,
  FormBtn,
} from './ContactForm.styled';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  // Responsible for updating the state
  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  // Called when the form is submitted
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  // Reset the form inputs
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Box border="contactForm" padding={2}>
        <ContactFrm onSubmit={this.handleSubmit}>
          <FormLabel>
            Name
            <FormInput
              value={name}
              onChange={this.handleInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>

          <FormLabel>
            Number
            <FormInput
              value={number}
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>

          <FormBtn type="submit">Add contact</FormBtn>
        </ContactFrm>
      </Box>
    );
  }
}

export default ContactForm;
