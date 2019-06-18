import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import StatsPlot from '../components/statsPlot/StatsPlot';
import * as selectors from '../selectors/statsPlot';
import {
  loadStats,
  loadOrganizations,
  changeOrganization,
  changeProgram,
  changeGroup,
  changeSelectedStartDate,
  changeCustomStartDate,
  changeCustomEndDate,
} from '../actions/statsPlot';
import { getEmptyList } from '../selectors';

const mapStateToProps = state => ({
  emptyList: getEmptyList(state),
  records: selectors.getRecords(state),
  organizations: selectors.getOrganizations(state),
  selectedOrganization: selectors.getSelectedOrganization(state),
  selectedProgram: selectors.getSelectedProgram(state),
  selectedGroup: selectors.getSelectedGroup(state),
  selectedStartDate: selectors.getSelectedStartDate(state),
  selectedEndDate: selectors.getSelectedEndDate(state),
  customStartDate: selectors.getCustomStartDate(state),
  customEndDate: selectors.getCustomEndDate(state),
});

const mapDispatchToProps = dispatch => ({
  loadStats: () => {
    dispatch(loadOrganizations());
    dispatch(loadStats());
  },
  changeOrganization: organization => dispatch(changeOrganization(organization)),
  changeProgram: program => dispatch(changeProgram(program)),
  changeGroup: group => dispatch(changeGroup(group)),
  changeSelectedStartDate: startDate => dispatch(changeSelectedStartDate(startDate)),
  changeCustomStartDate: startDate => dispatch(changeCustomStartDate(startDate)),
  changeCustomEndDate: endDate => dispatch(changeCustomEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(StatsPlot));
