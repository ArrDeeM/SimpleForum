import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import ForumRouter from "./router.js"
import '../css/header.css';

class Header extends Component {

  render () {
    return (
      <div className="main-header">
        <div className="site-name">
          <Link to = '/home'>
            <h1>Forum</h1>
          </Link>
        </div>
        <div className="header-right">
          <Link to = '/'>
          <button type="submit">
              Sign Out
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
