import React, { Component } from "react";
import PostListItem from "./postlistitem.js";
import Tags from "./tags.js";
import { NavLink, Link } from 'react-router-dom';
import '../css/post.css';
class Posts extends Component {
  _isMounted = false;
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      toggle: false,
      searchtype: 'title',
      tags: [],
      posts: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
    const promise = new Promise((result) => {
      const url = "http://localhost:4000/api/posts/v?post=";
      //console.log("Url CurrentUser: ",url);
      result(fetch(url).then(res => res.json()))
    });
    promise.then((data) => {
      //console.log("Do we get data: ", data)
      if (this._isMounted) {
        this.setState({
          loading: false,
          posts: data.posts
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleInput = e => {
    //value has spaces, url no like spaces, but work no?
    console.log("Search Input: ", e);
    console.log("Do tags exist: ", this.state.tags);
    var promise;
    if (this.state.searchtype === 'title'){
      if (this.state.tags === undefined || this.state.tags.length == 0){
        promise = new Promise((result) => {
          const url = "http://localhost:4000/api/posts/v?post=" + e.target.value;
          result(fetch(url).then(res => res.json()))
        });
      } else {
        console.log("Wrong");
        promise = new Promise((result) => {
          const url = "http://localhost:4000/api/postswithtag";
          result(fetch(url, {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
              title: e.target.value,
              tags: this.state.tags
            })
          }).then(res => res.json()))
        });
      }
    } else {
      if (this.state.tags === undefined || this.state.tags.length == 0){
        promise = new Promise((result) => {
          const url = "http://localhost:4000/api/posts/v?user=" + e.target.value;
          result(fetch(url).then(res => res.json()))
        });
      } else {
        console.log("Also Wrong");
        promise = new Promise((result) => {
          const url = "http://localhost:4000/api/userwithtag";
          result(fetch(url, {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({
              user: e.target.value,
              tags: this.state.tags
            })
          }).then(res => res.json()))
        });
      }
    }
    promise.then((data) => {
      //console.log("Do we get data: ", data)
      if (this._isMounted) {
        this.setState({
          posts: data.posts
        });
      }
    });
  }

  change = e => {
    this.setState({
      searchtype: e.target.value
    });
  }

  handleClick = e => {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  handleIt = e => {
    console.log("Breakout Check: ", e);
    this.setState({
      tags: e
    }, function () {
      //This step is to mimic the typical html response
      var hold = {
        target: {value: ""}
      };
      this.handleInput(hold);
    });
  }

  render () {
    const placeholder = "Search by " + this.state.searchtype;
    if (this.state.loading) {
      return null;
    } else {
      console.log("State Check: ", this.state);
      return (
        <div className="main-body">
          <div>
          <Link to = '/post'>
          <button type="submit">
              Make A Post
          </button>
          </Link>
          <button type="submit" onClick={this.handleClick}>
              Tags
          </button>
          {this.state.toggle ? <Tags toggle={this.handleClick} apply={this.handleIt} /> : null}
          </div>
          <section className="post-list">
            <div className="search-bar">
              <label for="search">Search:</label>
              <select name="options" onChange={this.change}>
                <option value="title">Title</option>
                <option value="user">User</option>
              </select>

              <input type="text"
                className="search-bar-input"
                onChange={this.handleInput}
                placeholder={placeholder}
              />
            </div>
            <ul className='postlist'>
              {Object.values(this.state.posts).map((post) => {
                return <PostListItem title={post.title} id={post.postId} user={post.username}/>;
              })}
            </ul>
          </section>
        </div>
      );
    }
  }
}

export default Posts;
