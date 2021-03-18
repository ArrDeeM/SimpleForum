import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.formType === 'login'){
      fetch("http://localhost:4000/api/post", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
          title: this.state.currentTitle,
          body: this.state.currentMessage,
          user: this.props.user
        })
      }).then(response => {
        this.setState({
          username: '',
          password: '',
        });
        this.props.history.push('/home');
      });
    }
    else{
      console.log("Ho")
    }
  }

  updateInput(field) {
    return ( (e) => this.setState({ [field]: e.target.value }))
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>

          <h1 className="holler login-holler">Simple Forum</h1>

          <h2 className="login-text">
            {this.props.altText}
            <br />
            {this.props.navLink}
          </h2>

          <input type="text"
            className="login-input"
            value={this.state.username}
            onChange={this.updateInput('username')}
            placeholder="Username"
          />

          <input type="password"
            className="login-input"
            value={this.state.password}
            onChange={this.updateInput('password')}
            placeholder="Password"
          />

          <button type="submit"
            className="login-button">
            {this.props.formType}
          </button>

        </form>

      </div>
    )
  }
}

export default withRouter(SessionForm);
