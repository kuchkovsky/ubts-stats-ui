import { reducer as formReducer } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import authReducer from '../reducers/auth';
import statsSenderReducer from '../reducers/statsSender';
import statsPlotReducer from '../reducers/statsPlot';

const reducer = combineReducers({
  root: rootReducer,
  auth: authReducer,
  form: formReducer,
  statsSender: statsSenderReducer,
  statsPlot: statsPlotReducer,
});

// eslint-disable-next-line
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(thunk)),
);

export default store;
