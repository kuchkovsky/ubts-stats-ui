
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { toggleDrawer } from '../actions/index';
import { signOut } from '../actions/auth';
import AppDrawer from '../components/AppDrawer';
import * as rootSelectors from '../selectors/index';
import * as authSelectors from '../selectors/auth';

const mapStateToProps = state => ({
  open: rootSelectors.getDrawerOpen(state),
  authenticated: authSelectors.getAuthenticated(state),
  admin: authSelectors.getAdmin(state),
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(AppDrawer));
