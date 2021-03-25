import { BrowserRouter, HashRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { Component,Fragment  } from "react";
import ForumRouter from "./router.js"
import Header from "./header.js"

class Home extends Component {
  render () {
    return (
      <BrowserRouter>
      <Fragment>
        <Header/>
        <ForumRouter/>
      </Fragment>
      </BrowserRouter>
    )
  }
}

export default Home;
