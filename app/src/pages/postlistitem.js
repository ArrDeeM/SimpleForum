import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import '../css/post.css'
class PostListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tags: []
    }
  }

  componentDidMount() {
    var promise;
    promise = new Promise((result) => {
      const url = "http://localhost:4000/api/tags/v?post=" + this.props.id;
      result(fetch(url).then(res => res.json()))
    });
    promise.then((data) => {
      this.setState({
        tags: data.tags
      })
    });
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.props.id !== prevProps.id) {
      var promise;
      promise = new Promise((result) => {
        const url = "http://localhost:4000/api/tags/v?post=" + this.props.id;
        result(fetch(url).then(res => res.json()))
      });
      promise.then((data) => {
        this.setState({
          tags: data.tags
        })
      });
    }
  }

  render () {
    console.log("Tag check for post ",this.props.id, this.state.tags);
    if (this.props.title != null && this.props.user != null){
      return(
        <NavLink
          to={`/${this.props.id}`}
          className="post-list-item"
          activeClassName="active"
        >
        <div className='postitem'>
          <h1>{this.props.title}</h1>
          <h2>By: {this.props.user}</h2>
          <table className='taglist'>
            <tr>
            {Object.values(this.state.tags).map((tag) => {
              return <td className='tag'>{tag.tag}</td>;
            })}
            </tr>
          </table>
        </div>
        </NavLink>
      );
    } else { return null; }
  }
}

export default PostListItem;
