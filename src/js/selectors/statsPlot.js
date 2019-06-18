export const getRecords = state => state.getIn(['statsPlot', 'records']);

export const getOrganizations = state => state.getIn(['statsPlot', 'organizations']);

export const getSelectedOrganization = state => state.getIn(['statsPlot', 'selectedOrganization']);

export const getSelectedProgram = state => state.getIn(['statsPlot', 'selectedProgram']);

export const getSelectedGroup = state => state.getIn(['statsPlot', 'selectedGroup']);

export const getSelectedStartDate = state => state.getIn(['statsPlot', 'selectedStartDate']);

export const getSelectedEndDate = state => state.getIn(['statsPlot', 'selectedEndDate']);

export const getCustomStartDate = state => state.getIn(['statsPlot', 'customStartDate']);

export const getCustomEndDate = state => state.getIn(['statsPlot', 'customEndDate']);
