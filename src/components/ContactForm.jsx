import React, { Component } from 'react';

import '../scss/components/contactForm.scss';

import Button from './Button';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    nameErr: '',
    emailErr: '',
    messageErr: '',
    success: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.validate();
    if (this.validate()) {
      const data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      };
      console.log(data);
      fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          this.setState({
            name: '',
            email: '',
            message: '',
            success: true
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };
  validate = () => {
    let isValid = true;

    const validateEmail = () => {
      const test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return test.test(this.state.email);
    };

    if (this.state.name.indexOf(' ') !== -1) {
      isValid = false;
      this.setState({
        nameErr: 'Podane imię jest nieprawidłowe'
      });
    } else {
      this.setState({
        nameErr: ''
      });
    }
    if (!validateEmail()) {
      isValid = false;
      this.setState({
        emailErr: 'Email jest nieprawidłowy'
      });
    } else {
      this.setState({
        emailErr: ''
      });
    }
    if (this.state.message.length < 120) {
      isValid = false;
      this.setState({
        messageErr: 'Wiadomość musi zawierać conajmniej 120 znaków'
      });
    } else {
      this.setState({
        messageErr: ''
      });
    }
    return isValid;
  };
  render() {
    const {
      name,
      nameErr,
      email,
      emailErr,
      message,
      messageErr,
      success
    } = this.state;
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        {success && (
          <span className='success'>
            Wiadomość została wysłana! Wkrótce się skontaktujemy!
          </span>
        )}
        <div className='row'>
          <label className='label'>
            Wpisz swoje imię
            <input
              type='text'
              name='name'
              value={name}
              placeholder='Krzysztof'
              onChange={this.handleChange}
            />
            {nameErr && <span className='error'>{nameErr}</span>}
          </label>
          <label className='label'>
            Wpisz swój email
            <input
              type='email'
              name='email'
              value={email}
              placeholder='abc@xyz.pl'
              onChange={this.handleChange}
            />
            {emailErr && <span className='error'>{emailErr}</span>}
          </label>
        </div>
        <label className='textarea-label'>
          Wpisz swoją wiadomość
          <textarea
            cols='30'
            rows='5'
            name='message'
            value={message}
            placeholder='Lorem ipsum dolor sit amet.'
            onChange={this.handleChange}
          />
          {messageErr && <span className='error'>{messageErr}</span>}
        </label>

        <button className='button'>Wyślij</button>
      </form>
    );
  }
}

export default ContactForm;
