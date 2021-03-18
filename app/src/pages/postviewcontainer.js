import PostView from "./postview.js";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  user: state.login.userDetails.username
})

export default connect(
  mapStateToProps,
  null
)(PostView)
