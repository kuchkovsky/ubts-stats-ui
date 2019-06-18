import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReduxTextField from '../shared/ReduxTextField';

export const limitValue = (min, max) => value => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

const TimeField = props => {
  const { hours, minutes } = props;

  const normalizeHours = limitValue(0, 168);
  const normalizeMinutes = limitValue(0, 59);

  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={10}>
            <Field
              name={hours}
              variant="outlined"
              margin="normal"
              type="number"
              label="0-168"
              fullWidth
              inputProps={{ min: '0', step: '1' }}
              normalize={normalizeHours}
              component={ReduxTextField}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">
              год.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={10}>
            <Field
              name={minutes}
              variant="outlined"
              margin="normal"
              type="number"
              label="0-59"
              fullWidth
              inputProps={{ min: '0', max: '59', step: '1' }}
              normalize={normalizeMinutes}
              component={ReduxTextField}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">
              хв.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

TimeField.propTypes = {
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
};

export default TimeField;
