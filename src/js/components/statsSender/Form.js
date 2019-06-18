import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ubtsImg from '../../../img/ubts.png';
import ReduxTextField from '../shared/ReduxTextField';
import TimeField, { limitValue } from './TimeField';

const normalizeWitnesses = limitValue(0, 9999);

const Form = ({ classes, handleSubmit, pristine, invalid, disable }) => (
  <form onSubmit={handleSubmit} className={classes.form}>
    <img src={ubtsImg} className={classes.headerImage}/>
    <Typography variant="h6" className={classes.sectionTitle}>
      Будь ласка, внесіть дані за попередній тиждень
    </Typography>
    <Typography variant="subtitle1" className={classes.question}>
      Скільки часу було проведено в спілкуванні з Богом (молитва, читання Писання)?
    </Typography>
    <TimeField hours="prayerHours" minutes="prayerMinutes"/>
    <Typography variant="subtitle1" className={classes.question}>
      Скільком людям було засвідчено про Христа?
    </Typography>
    <Field
      name="christWitnesses"
      variant="outlined"
      margin="normal"
      type="number"
      label="0-9999"
      inputProps={{ min: '0', step: '1' }}
      normalize={normalizeWitnesses}
      component={ReduxTextField}
      style={{ width: 185 }}
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      disabled={pristine || invalid || disable}
      className={classes.submit}
    >
      Надіслати
    </Button>
  </form>
);

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  disable: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
