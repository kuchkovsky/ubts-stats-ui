import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { DatePicker } from 'material-ui-pickers';
import PlotSelect from './PlotSelect';
import {
  getPastMonth,
  getPastYear,
  CUSTOM_PERIOD,
  getBeginningOfTime,
  DATE_FORMAT,
} from '../../utils/date';

const NamedMenuItem = item => (
  <MenuItem
    value={item.value ? item.value : item.name}
    key={item.name}
  >
    {item.name}
  </MenuItem>
);

const dates = [
  {
    name: 'Весь час',
    value: getBeginningOfTime(),
  },
  {
    name: 'Місяць',
    value: getPastMonth(),
  },
  {
    name: '3 місяці',
    value: getPastMonth(3),
  },
  {
    name: 'Рік',
    value: getPastYear(),
  },
  {
    name: 'Вибрати період...',
    value: CUSTOM_PERIOD,
  },
];

const DateFilter = props => {
  const {
    classes,
    selectedStartDate,
    customStartDate,
    customEndDate,
    changeSelectedStartDate,
    changeCustomStartDate,
    changeCustomEndDate,
  } = props;

  return (
    <Grid
      container
      spacing={8}
      className={`${classes.grid} ${classes.dateGrid}`}
    >
      <Grid item xs={4}>
        <PlotSelect
          classes={classes}
          title="Період"
          titleWidth={55}
          value={selectedStartDate}
          onChange={changeSelectedStartDate}
        >
          { dates.map(NamedMenuItem) }
        </PlotSelect>
      </Grid>
      <Grid item xs={4}>
        <DatePicker
          value={customStartDate}
          onChange={val => changeCustomStartDate(val)}
          format={DATE_FORMAT}
          disabled={selectedStartDate !== CUSTOM_PERIOD}
          className={classes.formControl}
          variant="outlined"
          label="Від"
        />
      </Grid>
      <Grid item xs={4}>
        <DatePicker
          value={customEndDate}
          onChange={val => changeCustomEndDate(val)}
          format={DATE_FORMAT}
          disabled={selectedStartDate !== CUSTOM_PERIOD}
          className={classes.formControl}
          variant="outlined"
          label="До"
        />
      </Grid>
    </Grid>
  );
};

DateFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedStartDate: PropTypes.string.isRequired,
  customStartDate: PropTypes.object.isRequired,
  customEndDate: PropTypes.object.isRequired,
  changeSelectedStartDate: PropTypes.func.isRequired,
  changeCustomStartDate: PropTypes.func.isRequired,
  changeCustomEndDate: PropTypes.func.isRequired,
};

export default DateFilter;
