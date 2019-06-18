import { connect } from 'react-redux';
import * as selectors from '../../selectors/statsSender';
import { uploadStats, checkUserStats } from '../../actions/statsSender';
import StatsSender from '../../components/statsSender/StatsSender';

const mapStateToProps = state => ({
  initialValues: selectors.getInitialValues(state),
  upload: selectors.getUpload(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: stats => dispatch(uploadStats(stats)),
  checkUserStats: () => dispatch(checkUserStats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsSender);
