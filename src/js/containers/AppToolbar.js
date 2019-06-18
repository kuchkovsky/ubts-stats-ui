import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withRouter } from 'react-router-dom';
import { toggleDrawer } from '../actions/index';
import { signOut } from '../actions/auth';
import AppToolbar from '../components/AppToolbar';
import * as authSelectors from '../selectors/auth';

const mapStateToProps = state => ({
  authenticated: authSelectors.getAuthenticated(state),
  admin: authSelectors.getAdmin(state),
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
  signOut: () => dispatch(signOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(
  AppToolbar,
)));
