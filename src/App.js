import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './scss/main.scss';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/logowanie' component={Login}></Route>
          {/* <Route exact path="/oddaj-rzeczy" component={}></Route>

          <Route exact path="/rejestracja" component={Home}></Route>
          <Route exact path="/wylogowano" component={Home}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
