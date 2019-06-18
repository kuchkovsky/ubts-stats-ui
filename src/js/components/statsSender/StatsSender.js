import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import SnackbarMessage from '../shared/SnackbarMessage';
import formStyles from '../../styles/form';
import Form from '../../containers/statsSender/Form';

const StatsSender = props => {
  const { classes, upload, checkUserStats } = props;

  useEffect(() => {
    checkUserStats();
  }, []);

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Form disable={upload.pending || upload.finished} {...props}/>
      </Paper>
      <div className={classes.infoMessageWrapper}>
        { upload.pending &&
            <SnackbarMessage variant="info" message="Надсилання даних..."/> }
        { upload.finished &&
            <SnackbarMessage variant="info" message="Дані успішно збережено."/> }
        { upload.error &&
          <SnackbarMessage variant="error" message={upload.errorMessage}/> }
      </div>
    </main>
  );
};

StatsSender.propTypes = {
  classes: PropTypes.object.isRequired,
  upload: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  checkUserStats: PropTypes.func.isRequired,
};

export default withStyles(formStyles(500))(StatsSender);
