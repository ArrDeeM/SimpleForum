import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SessionForm from './session_form.jsx';

const mapStateToProps = (state) => ({
  formType: 'signup',
  navLink: <Link to="/login">Log in to get started.</Link>,
  altText: 'Already have an account?',
  processForm: null,
  login: null,
  receiveErrors: null,
  loggedIn: null
})

export default connect(
  mapStateToProps,
  null
)(SessionForm);
