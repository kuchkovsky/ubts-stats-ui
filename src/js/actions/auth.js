import { createAction } from 'redux-actions';
import axios from 'axios';
import * as auth from '../utils/auth';
import history from '../utils/history';
import { SIGN_IN } from '../utils/apiEndpoints';
import { SIGN_IN as SIGN_IN_ROUTE, UPLOAD_STATS } from '../utils/routes';
import { resetStatsUpload } from './statsSender';

export const SIGNING_IN = 'SIGNING_IN';
export const signingIn = createAction(SIGNING_IN);

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const signInSuccess = createAction(SIGN_IN_SUCCESS);

export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const signInFailed = createAction(SIGN_IN_FAILED);

export const SIGNED_OUT = 'SIGNED_OUT';
export const signedOut = createAction(SIGNED_OUT);

export const signIn = credentials =>
  dispatch => {
    dispatch(signingIn());
    axios.post(SIGN_IN, credentials)
      .then(response => {
        auth.saveToken(response.data.token);
        auth.setupAxiosAuthHeader();
        dispatch((signInSuccess()));
        if (!auth.isAdmin()) {
          history.push(UPLOAD_STATS);
        }
      })
      .catch(() => dispatch(signInFailed()));
  };

export const signOut = () =>
  dispatch => {
    auth.deleteToken();
    auth.removeAxiosAuthHeader();
    dispatch(signedOut());
    dispatch(resetStatsUpload());
    history.push(SIGN_IN_ROUTE);
  };
