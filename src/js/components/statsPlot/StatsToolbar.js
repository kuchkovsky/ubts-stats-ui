import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GroupFilter from './GroupFilter';
import DateFilter from './DateFilter';

const styles = theme => ({
  grid: {
    backgroundColor: theme.palette.background.paper,
    padding: '10px 25px 10px 10px',
  },
  dateGrid: {
    marginTop: -30,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
  },
});

const StatsToolbar = props => (
  <div>
    <GroupFilter {...props}/>
    <DateFilter {...props}/>
  </div>
);

StatsToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsToolbar);
