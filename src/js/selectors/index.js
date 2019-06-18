export const getDrawerOpen = state => state.getIn(['root', 'drawer', 'open']);

export const getContentLoad = state => state.getIn(['root', 'contentLoad']);

export const getEmptyList = state => state.getIn(['root', 'contentLoad', 'empty']);
