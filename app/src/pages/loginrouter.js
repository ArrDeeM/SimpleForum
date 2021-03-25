import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Signup from "./Signup.js";
import Login from './Login';
import Home from './home.js';

const LoginRouter = () => (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/home" component={Home} />  
    </Switch>
)

export default LoginRouter;
