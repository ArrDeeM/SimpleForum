import React, { Component } from "react";
import TagListItem from './taglistitem.js';
import '../css/tags.css';
class Tags extends Component {
  _isMounted = false;
  constructor (props) {
    super(props);
    this.state = {
      tags: [],
      selected: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
    const promise = new Promise((result) => {
      const url = "http://localhost:4000/api/tags/v?tags=";
      //console.log("Url CurrentUser: ",url);
      result(fetch(url).then(res => res.json()))
    });
    promise.then((data) => {
      //console.log("Do we get data: ", data)
      if (this._isMounted) {
        this.setState({
          tags: data.tags
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleClose = () => {
   this.props.toggle();
  }

  handleApply = () => {
    this.props.apply(this.state.selected);
    this.props.toggle();
  }

  handleInput = e => {
    //value has spaces, url no like spaces, but work no?
    console.log("Search Input: ", e.target.value);
    var promise;
    promise = new Promise((result) => {
      const url = "http://localhost:4000/api/tags/v?tags=" + e.target.value;
      result(fetch(url).then(res => res.json()))
    });
    promise.then((data) => {
      //console.log("Do we get data: ", data)
      if (this._isMounted) {
        this.setState({
          tags: data.tags
        });
      }
    });
  }

  handleSelect = e => {
    console.log("e check: ",e);
    if(!this.state.selected.includes(e)) {
      this.state.selected.push(e)
      this.setState({
        selected: this.state.selected
      });
    }
    console.log(this.state.selected);
  }

  render () {
    console.log("taglist check: ", this.state.tags);
    console.log("selected check: ", this.state.selected);

    return(
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={this.handleClose}>&times;    </span>
        <h1>Select Tags for Search</h1>
        <section className="tag-list">
          <div className="search-bar">
            <input type="text"
              className="search-bar-input"
              onChange={this.handleInput}
              placeholder="Search by name"
            />
          </div>
          <ul className='taglist'>
            {Object.values(this.state.tags).map((tag) => {
              return <TagListItem tag={tag.tag} select={this.handleSelect}/>;
            })}
          </ul>
        </section>
        <h2>Selected Tags: </h2>
        <div className="selected">
          {this.state.selected.map((pick) => {
            console.log("pick check: ", pick)
            return (
              <div className="pick">
                {pick}
              </div>
            )
          })}
        </div>
        <button type="submit" onClick={this.handleApply}>
            Apply
        </button>
      </div>
    </div>
    );
  }
}

export default Tags;
