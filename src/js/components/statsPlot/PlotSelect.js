import React from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const PlotSelect = ({ classes, title, titleWidth, value, onChange, children }) => (
  <FormControl variant="outlined" className={classes.formControl}>
    <InputLabel>
      { title }
    </InputLabel>
    <Select
      value={value}
      onChange={event => onChange(event.target.value)}
      input={<OutlinedInput labelWidth={titleWidth}/>}
    >
      { children }
    </Select>
  </FormControl>
);

PlotSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  titleWidth: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default PlotSelect;
