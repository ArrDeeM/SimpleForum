import { BrowserRouter, HashRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { Component,Fragment  } from "react";
import ForumRouter from "./pages/router.js"
import Header from "./pages/header.js"
import { Provider } from 'react-redux'
import StoreConfig from './store/ConfigStore'
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";

class App extends Component {
  render () {
    const store = StoreConfig();
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Header/>
          <ForumRouter/>
        </Fragment>
      </BrowserRouter>
      </Provider>
    )
  }
  /*
  render (){
    const store = StoreConfig();
    console.log(this.state);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
          <Route path="/login" exact render={(props) => (
            !this.props.loggedIn ? (
              <LoginFormContainer />
            ) : (
              <Redirect to="/" />
            )
          )} />
          <Route path="/signup" exact render={(props) => (
            !this.props.loggedIn ? (
              <SignUpFormContainer />
            ) : (
              <Redirect to="/" />
            )
          )} />
          <Route path="/" exact render={(props) => (
            this.props.loggedIn ? (
              <ForumRouter />
            ) : (
              <Redirect to="/login" />
            )
          )} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
  */
}

export default App;
