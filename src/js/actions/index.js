import { createAction } from 'redux-actions';
import axios from 'axios';
import { isAuthErrorResponse } from '../utils/auth';
import history from '../utils/history';
import { SIGN_IN } from '../utils/routes';

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const toggleDrawer = createAction(TOGGLE_DRAWER);

export const CONTENT_LOADING = 'CONTENT_LOADING';
export const contentLoading = createAction(CONTENT_LOADING);

export const CONTENT_LOADED = 'CONTENT_LOADED';
export const contentLoaded = createAction(CONTENT_LOADED);

export const CONTENT_LOAD_ERROR = 'CONTENT_LOAD_ERROR';
export const contentLoadError = createAction(CONTENT_LOAD_ERROR);

export const CONTENT_LOAD_EMPTY_CONTENT = 'CONTENT_LOAD_EMPTY_CONTENT';
export const contentLoadEmpty = createAction(CONTENT_LOAD_EMPTY_CONTENT);

export const loadMainContent = ({ url, params }, onSuccessAction, noAnimation = false, callback) =>
  dispatch => {
    if (!noAnimation) {
      dispatch(contentLoading());
    }
    axios.get(url, { params })
      .then(response => {
        const { data } = response;
        if (Array.isArray(data) && !data.length) {
          dispatch(contentLoadEmpty());
        }
        dispatch(onSuccessAction(data));
        if (!noAnimation) {
          dispatch(contentLoaded());
        }
        if (callback) {
          callback(data);
        }
      })
      .catch(error => {
        if (isAuthErrorResponse(error)) {
          history.push(SIGN_IN);
          if (!noAnimation) {
            dispatch(contentLoaded());
          }
          return;
        }
        dispatch(contentLoadError({
          message: `Не вдалося завантажити дані: ${error.message}`,
          retryAction: () => dispatch(loadMainContent(url, onSuccessAction, noAnimation)),
        }));
      });
  };
