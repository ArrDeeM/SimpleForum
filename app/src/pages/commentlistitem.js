import React, { Component } from "react";
import '../css/comment.css';
class CommentListItem extends Component {
  render () {
    return(
      <div className="commentitem">
        <h1>{this.props.user}</h1>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default CommentListItem;
