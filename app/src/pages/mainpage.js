import React, { Component, Fragment } from "react";
import Header from "./header.js";
import Posts from "./posts.js";

class MainPage extends Component {
  render () {
    return (
      <Fragment>
        <Posts/>
      </Fragment>
    );
  }
}

export default MainPage;
