import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { withRouter } from 'react-router-dom';
import Content from '../components/Content';
import * as rootSelectors from '../selectors/index';
import * as authSelectors from '../selectors/auth';

const mapStateToProps = state => ({
  contentLoad: rootSelectors.getContentLoad(state),
  authenticated: authSelectors.getAuthenticated(state),
});

export default withRouter(connect(mapStateToProps)(withImmutablePropsToJS(Content)));
