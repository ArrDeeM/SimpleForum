import React, { Component } from "react";
import { Redirect, NavLink, Link } from 'react-router-dom';
import ForumRouter from "./router.js"
import '../css/header.css';

class Header extends Component {

  handleSubmit = e => {
    e.preventDefault();
    <Redirect to="/" />
    window.location.reload(false);
  }

  render () {
    return (
      <div className="main-header">
        <div className="site-name">
          <Link to = '/home'>
            <h1>Forum</h1>
          </Link>
        </div>
        <div className="header-right">
          <h2>{this.props.user}</h2>
          <button type="header-button" onClick={this.handleSubmit}>
              Sign Out
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
