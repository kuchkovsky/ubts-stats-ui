export const getInitialValues = state => state.getIn(['statsSender', 'stats']);

export const getUpload = state => state.getIn(['statsSender', 'upload']).toJS();
