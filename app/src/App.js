import { BrowserRouter, HashRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { Component,Fragment  } from "react";
import ForumRouter from "./pages/router.js"
import LoginRouter from "./pages/loginrouter.js"
import Header from "./pages/header.js"
import { Provider } from 'react-redux'
import StoreConfig from './store/ConfigStore'

class App extends Component {
  render () {
    const store = StoreConfig();
    return (
      <Provider store={store}>
      <BrowserRouter>
        <LoginRouter/>
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
