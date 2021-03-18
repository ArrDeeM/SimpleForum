import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import '../css/post.css';
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: '',
      currentMessage: '',
      tagString: '',
      currentTags: []
    };
  }

  updateCurrentMessage = e => {
    this.setState({ currentMessage: e.target.value })
  }

  updateCurrentTitle = e => {
    this.setState({ currentTitle: e.target.value })
  }

  updateCurrentTags = e => {
    var str = e.target.value;
    var tags = str.split(',');
    this.setState({ currentTags: tags, tagString: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:4000/api/post", {
      method: "POST",
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        title: this.state.currentTitle,
        body: this.state.currentMessage,
        user: this.props.user,
        tags: this.state.currentTags
      })
    }).then(response => {
      this.setState({
        currentTitle: '',
        currentMessage: '',
        tagString: '',
        currentTags: []
      });
      this.props.history.push('/home');
    });
  }

  render () {
    console.log(this.state);
    return(
      <form className="post-form" onSubmit={this.handleSubmit}>
        <div>
          <input type="text" value={this.state.currentTitle} placeholder="Enter a Title..." onChange={this.updateCurrentTitle}required />
        </div>
        <textarea className="post-form-input" placeholder="Type a post..." value={this.state.currentMessage} onChange={this.updateCurrentMessage}required />
        <div>
          <input className="text" type="text" value={this.state.tagString} placeholder="Enter Tags(seperated by commas):" onChange={this.updateCurrentTags}required />
        </div>
        <button type="submit" onClick={this.handleSubmit}>
            Submit
        </button>
      </form>
    );
  }
}

export default PostForm;
