import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import { withAuthentication } from './components/Session';

import './scss/main.scss';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LogOut from './pages/LogOut';
import GiveStuff from './pages/GiveStuff';
import UserNav from './components/UserNav';

const App = () => {
  return (
    <BrowserRouter>
      <UserNav />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}></Route>
        <Route path={ROUTES.GIVESTUFF} component={GiveStuff}></Route>
        <Route path={ROUTES.SIGN_IN} component={Login}></Route>
        <Route path={ROUTES.SIGN_UP} component={SignUp}></Route>
        <Route path={ROUTES.LOGOUT} component={LogOut}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default withAuthentication(App);
