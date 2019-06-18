import { fromJS } from 'immutable';
import * as actions from '../actions/statsSender';
import { getPreviousSunday } from '../utils/date';

const previousSunday = getPreviousSunday();

const initialState = fromJS({
  stats: {
    date: previousSunday,
    prayerHours: 0,
    prayerMinutes: 0,
    christWitnesses: 0,
  },
  upload: {
    pending: false,
    error: false,
    finished: false,
    errorMessage: '',
  },
});

const statsSenderReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.STATS_UPLOAD_RESET:
    return state.set('upload', initialState.get('upload'));

  case actions.STATS_UPLOADING:
    return state
      .set('stats', action.payload)
      .set('upload', initialState.get('upload'))
      .setIn(['upload', 'pending'], true);

  case actions.STATS_UPLOADED:
    return state.mergeIn(['upload'], fromJS({ pending: false, finished: true }));

  case actions.STATS_UPLOAD_ERROR:
    return state.mergeIn(['upload'], fromJS({ pending: false, error: true, errorMessage: action.payload }));

  default:
    return state;
  }
};

export default statsSenderReducer;
