import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { signIn } from '../../actions/auth';
import SignIn from '../../components/signIn/SignIn';
import * as authSelectors from '../../selectors/auth';

const mapStateToProps = state => ({
  auth: authSelectors.getAuth(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: credentials => dispatch(signIn(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(SignIn));
