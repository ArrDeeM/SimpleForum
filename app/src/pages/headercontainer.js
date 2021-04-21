import Header from "./header.js";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  user: state.login.userDetails.username,
  loggedIn: false
})

export default connect(
  mapStateToProps,
  null
)(Header)
