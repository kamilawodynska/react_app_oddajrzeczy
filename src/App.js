import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/main.scss';

import { AuthProvider } from './firebase/Auth';
import PrivateRoute from './firebase/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LogOut from './pages/LogOut';
import GiveStuff from './pages/GiveStuff';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <PrivateRoute
              exact
              path='/oddaj-rzeczy'
              component={GiveStuff}
            ></PrivateRoute>
            <Route exact path='/logowanie' component={Login}></Route>
            <Route exact path='/rejestracja' component={SignUp}></Route>
            <Route exact path='/wylogowano' component={LogOut}></Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
