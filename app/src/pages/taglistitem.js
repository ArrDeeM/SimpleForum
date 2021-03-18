import React, { Component } from "react";
import {  Link } from 'react-router-dom';
class TagListItem extends Component {
  render () {
    return(
      <div className="tagitem" onClick={this.props.select.bind(this,this.props.tag)}>
        {this.props.tag}
      </div>
    );
  }
}

export default TagListItem;
