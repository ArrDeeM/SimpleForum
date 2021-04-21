import React, { Component } from "react";
import { Link } from 'react-router-dom';
import CommentListItem from "./commentlistitem.js";
import '../css/comment.css';

class PostView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      post: null,
      currentMessage: '',
      comments: null
    }
  }

  updateCurrentMessage = e => {
    this.setState({ currentMessage: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:4000/api/comment", {
      method: "POST",
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        body: this.state.currentMessage,
        post: this.props.match.params.postId,
        user: this.props.user
      })
    }).then(res => res.json()).then((data) => {
      this.setState({
        currentMessage: '',
        comments: Object.assign(this.state.comments,data.comments)
      });
    });
  }

  componentDidMount() {
    const promise = new Promise((result) => {
      const url = "http://localhost:4000/api/post/v?post=" + this.props.match.params.postId;
      //console.log("Url CurrentUser: ",url);
      result(fetch(url).then(res => res.json()))
    });
    const promise2 = new Promise((result) => {
      const url = "http://localhost:4000/api/comments/v?post=" + this.props.match.params.postId;
      //console.log("Url CurrentUser: ",url);
      result(fetch(url).then(res => res.json()))
    });
    promise.then((data) => {
      //console.log("Do we get data: ", data)
      promise2.then((data2) => {
        this.setState({
          post: data.post,
          comments: data2.comments
        });
      });
    });
  }



  render () {
    if(this.state.post == null){
      return null;
    } else {
      return(
        <div className="main-body">
          <div className="post-view">
            <h1> {this.state.post.title} </h1>
            <h5> By: {this.state.post.username} </h5>
            <p> {this.state.post.body} </p>
          </div>
          <div className="comment-view">
          <textarea className="comment-form-input" placeholder="Type a comment..." value={this.state.currentMessage} onChange={this.updateCurrentMessage} />
          <button type="submit" onClick={this.handleSubmit}>
              Comment
          </button>
          <section className="comment-list">
            <ul className='commentlist'>
              {Object.values(this.state.comments).map((comment) => {
                //console.log(comment);
                return <CommentListItem body={comment.body} user={comment.username}/>;
              })}
            </ul>
          </section>
          </div>
        </div>
      );
    }
  }
}

export default PostView;
