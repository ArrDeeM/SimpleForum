import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form.jsx';

const mapStateToProps = (state) => ({
  formType: 'login',
  navLink: <Link to="/signup">Sign up to get started.</Link>,
  altText: 'Don\'t have an account?',
  processForm: null,
  login: null,
  receiveErrors: null,
  loggedIn: null
})

export default connect(
  mapStateToProps,
  null
)(SessionForm);
