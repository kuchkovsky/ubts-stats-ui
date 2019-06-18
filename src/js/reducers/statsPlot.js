import { fromJS } from 'immutable';
import * as actions from '../actions/statsPlot';
import { sortByField } from '../utils/functions';
import { getToday, getBeginningOfTime } from '../utils/date';

export const ALL = 'Всі';

const initialState = fromJS({
  records: [],
  organizations: [],
  selectedOrganization: ALL,
  selectedProgram: ALL,
  selectedGroup: ALL,
  selectedStartDate: getBeginningOfTime(),
  selectedEndDate: getToday(),
  customStartDate: new Date(),
  customEndDate: new Date(),
});

const MASTER = { name: ALL };

const transformEmAll = organizations => [MASTER, ...sortByField(organizations, 'name')]
  .map((masteredOrganization, orgIndex) => ({
    ...masteredOrganization,
    programs: [MASTER, ...(orgIndex ? sortByField(masteredOrganization.programs, 'name') : [])]
      .map((masteredProgram, groupIndex) => ({
        ...masteredProgram,
        groups: [MASTER, ...(groupIndex ? sortByField(masteredProgram.groups, 'name') : [])],
      })),
  }));

const statsPlotReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.STATS_PLOT_STATS_LOADED:
    return state.set('records', fromJS(action.payload));

  case actions.STATS_PLOT_ORGANIZATIONS_LOADED:
    return state.set('organizations', fromJS(transformEmAll(action.payload)));

  case actions.STATS_PLOT_ORGANIZATION_CHANGED:
    return state.set('selectedOrganization', action.payload);

  case actions.STATS_PLOT_PROGRAM_CHANGED:
    return state.set('selectedProgram', action.payload);

  case actions.STATS_PLOT_GROUP_CHANGED:
    return state.set('selectedGroup', action.payload);

  case actions.STATS_PLOT_START_DATE_CHANGED:
    return state.set('selectedStartDate', action.payload);

  case actions.STATS_PLOT_CUSTOM_START_DATE_CHANGED:
    return state.set('customStartDate', action.payload);

  case actions.STATS_PLOT_CUSTOM_END_DATE_CHANGED:
    return state.set('customEndDate', action.payload);

  default:
    return state;
  }
};

export default statsPlotReducer;
