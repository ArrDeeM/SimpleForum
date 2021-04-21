import { BrowserRouter, HashRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { Component,Fragment  } from "react";
import ForumRouter from "./router.js"
import HeaderContainer from "./headercontainer.js"

class Home extends Component {
  render () {
    return (
      <BrowserRouter>
      <Fragment>
        <HeaderContainer/>
        <ForumRouter/>
      </Fragment>
      </BrowserRouter>
    )
  }
}

export default Home;
