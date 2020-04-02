import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../firebase/index.js';
import * as ROUTES from '../constants/routes';

import '../scss/components/login.scss';
import Button from './Button';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.GIVESTUFF);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form className='form' onSubmit={this.onSubmit}>
        <div className='labels'>
          <label className='label'>
            Email
            <input
              name='email'
              value={email}
              onChange={this.onChange}
              type='email'
            />
          </label>
          <label className='label'>
            Hasło
            <input
              name='password'
              value={password}
              onChange={this.onChange}
              type='password'
            />
          </label>
        </div>
        {error && <span className='error'>{error.message}</span>}
        <div className='buttons-login-form'>
          <Button text='Załóż konto' href='rejestracja' />
          <button className='button' disabled={isInvalid} type='submit'>
            Zaloguj
          </button>
        </div>
      </form>
    );
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export { SignInForm };
