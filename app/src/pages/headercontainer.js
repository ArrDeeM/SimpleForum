import Header from "./header.js";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: false
})

export default connect(
  mapStateToProps,
  null
)(Header)
