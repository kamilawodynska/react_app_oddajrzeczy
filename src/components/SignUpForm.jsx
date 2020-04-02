import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../firebase/index.js';
import * as ROUTES from '../constants/routes';

import '../scss/components/login.scss';

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('i am in');
    const { email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
    const { email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '' || email === '';

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
              name='passwordOne'
              value={passwordOne}
              onChange={this.onChange}
              type='password'
            />
          </label>
          <label className='label'>
            Powtórz hasło
            <input
              name='passwordTwo'
              value={passwordTwo}
              onChange={this.onChange}
              type='password'
            />
          </label>
        </div>
        {error && <span className='error'>{error.message}</span>}
        <div className='buttons-login-form'>
          <button className='button'>Zaloguj</button>
          <button className='button' disabled={isInvalid} type='submit'>
            Załóż konto
          </button>
        </div>
      </form>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export { SignUpForm };
