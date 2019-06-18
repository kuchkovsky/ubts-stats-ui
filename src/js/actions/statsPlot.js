import { createAction } from 'redux-actions';
import { RECORDS, ORGANIZATIONS } from '../utils/apiEndpoints';
import { loadMainContent } from './index';
import { ALL } from '../reducers/statsPlot';
import * as selectors from '../selectors/statsPlot';
import { CUSTOM_PERIOD, formatDate } from '../utils/date';

export const STATS_PLOT_STATS_LOADED = 'STATS_PLOT_STATS_LOADED';
export const statsLoaded = createAction(STATS_PLOT_STATS_LOADED);

export const STATS_PLOT_ORGANIZATIONS_LOADED = 'STATS_PLOT_ORGANIZATIONS_LOADED';
export const organizationsLoaded = createAction(STATS_PLOT_ORGANIZATIONS_LOADED);

export const STATS_PLOT_ORGANIZATION_CHANGED = 'STATS_PLOT_ORGANIZATION_CHANGED';
export const organizationChanged = createAction(STATS_PLOT_ORGANIZATION_CHANGED);

export const STATS_PLOT_PROGRAM_CHANGED = 'STATS_PLOT_PROGRAM_CHANGED';
export const programChanged = createAction(STATS_PLOT_PROGRAM_CHANGED);

export const STATS_PLOT_GROUP_CHANGED = 'STATS_PLOT_GROUP_CHANGED';
export const groupChanged = createAction(STATS_PLOT_GROUP_CHANGED);

export const STATS_PLOT_START_DATE_CHANGED = 'STATS_PLOT_START_DATE_CHANGED';
export const startDateChanged = createAction(STATS_PLOT_START_DATE_CHANGED);

export const STATS_PLOT_CUSTOM_START_DATE_CHANGED = 'STATS_PLOT_CUSTOM_START_DATE_CHANGED';
export const customStartDateChanged = createAction(STATS_PLOT_CUSTOM_START_DATE_CHANGED);

export const STATS_PLOT_CUSTOM_END_DATE_CHANGED = 'STATS_PLOT_CUSTOM_END_DATE_CHANGED';
export const customEndDateChanged = createAction(STATS_PLOT_CUSTOM_END_DATE_CHANGED);

export const loadOrganizations = () =>
  dispatch =>
    dispatch(loadMainContent({ url: ORGANIZATIONS }, organizationsLoaded, true));


export const loadStats = () =>
  (dispatch, getState) => {
    const state = getState();
    const selectedStartDate = selectors.getSelectedStartDate(state);
    const selectedEndDate = selectors.getSelectedEndDate(state);
    const customStartDate = selectors.getCustomStartDate(state);
    const customEndDate = selectors.getCustomEndDate(state);
    const selectedOrganization = selectors.getSelectedOrganization(state);
    const selectedProgram = selectors.getSelectedProgram(state);
    const selectedGroup = selectors.getSelectedGroup(state);
    dispatch(loadMainContent({
      url: RECORDS,
      params: {
        startDate: selectedStartDate === CUSTOM_PERIOD ?
          formatDate(customStartDate) : selectedStartDate,
        endDate: selectedStartDate === CUSTOM_PERIOD ?
          formatDate(customEndDate) : selectedEndDate,
        organizationName: selectedOrganization === ALL ? null : selectedOrganization,
        programName: selectedProgram === ALL ? null : selectedProgram,
        groupName: selectedGroup === ALL ? null : selectedGroup,
      },
    }, statsLoaded));
  };

export const changeOrganization = organization =>
  dispatch => {
    dispatch(organizationChanged(organization));
    dispatch(programChanged(ALL));
    dispatch(groupChanged(ALL));
    dispatch(loadStats());
  };

export const changeProgram = program =>
  dispatch => {
    dispatch(programChanged(program));
    dispatch(groupChanged(ALL));
    dispatch(loadStats());
  };

export const changeGroup = group =>
  dispatch => {
    dispatch(groupChanged(group));
    dispatch(loadStats());
  };

export const changeSelectedStartDate = startDate =>
  dispatch => {
    dispatch(startDateChanged(startDate));
    dispatch(loadStats());
  };

export const changeCustomStartDate = startDate =>
  (dispatch, getState) => {
    const state = getState();
    const customEndDate = selectors.getCustomEndDate(state);
    if (startDate > customEndDate) {
      dispatch(customStartDateChanged(customEndDate));
      dispatch(customEndDateChanged(startDate));
    } else {
      dispatch(customStartDateChanged(startDate));
    }
    dispatch(loadStats());
  };

export const changeCustomEndDate = endDate =>
  (dispatch, getState) => {
    const state = getState();
    const customStartDate = selectors.getCustomStartDate(state);
    if (endDate < customStartDate) {
      dispatch(customStartDateChanged(endDate));
      dispatch(customEndDateChanged(customStartDate));
    } else {
      dispatch(customEndDateChanged(endDate));
    }
    dispatch(loadStats());
  };
