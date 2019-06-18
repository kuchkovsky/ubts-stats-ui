import { createAction } from 'redux-actions';
import axios from 'axios';
import { RECORDS, USER_RECORDS } from '../utils/apiEndpoints';
import { getPreviousSunday } from '../utils/date';

const previousSunday = getPreviousSunday();

export const STATS_UPLOAD_RESET = 'STATS_UPLOAD_RESET';
export const resetStatsUpload = createAction(STATS_UPLOAD_RESET);

export const STATS_UPLOADING = 'STATS_UPLOADING';
export const statsUploading = createAction(STATS_UPLOADING);

export const STATS_UPLOADED = 'STATS_UPLOADED';
export const statsUploaded = createAction(STATS_UPLOADED);

export const STATS_UPLOAD_ERROR = 'STATS_UPLOAD_ERROR';
export const statsUploadError = createAction(STATS_UPLOAD_ERROR);

export const uploadStats = stats =>
  dispatch => {
    dispatch(statsUploading(stats));
    const convertedStats = {
      prayerMinutes: +stats.get('prayerHours') * 60 + +stats.get('prayerMinutes'),
      christWitnesses: stats.get('christWitnesses'),
      date: stats.get('date'),
    };
    axios.post(RECORDS, convertedStats)
      .then(() => {
        dispatch(statsUploaded());
      })
      .catch(error => {
        const dispatchErrorMessage = message => dispatch(statsUploadError(message));
        dispatchErrorMessage(`Не вдалося надіслати дані: ${error.message}`);
      });
  };

export const checkUserStats = () =>
  dispatch =>
    axios.get(USER_RECORDS, { params: { date: previousSunday } })
      .then(response => {
        if (response.data.length) {
          dispatch(statsUploaded());
        }
      });
