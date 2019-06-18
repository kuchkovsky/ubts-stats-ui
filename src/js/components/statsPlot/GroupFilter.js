import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import PlotSelect from './PlotSelect';

const NamedMenuItem = item => (
  <MenuItem
    value={item.name}
    key={item.name}
  >
    {item.name}
  </MenuItem>
);

const GroupFilter = props => {
  const {
    classes,
    organizations,
    selectedOrganization,
    selectedProgram,
    selectedGroup,
    changeOrganization,
    changeProgram,
    changeGroup,
  } = props;

  const filteredPrograms = organizations
    .filter(organization => organization.name === selectedOrganization)
    .map(organization => organization.programs);
  const filteredGroups = filteredPrograms
    .map(programs => programs
      .filter(program => program.name === selectedProgram)
      .flatMap(program => program.groups));

  return (
    <Grid
      container
      spacing={8}
      className={classes.grid}
    >
      <Grid item xs={2}>
        <PlotSelect
          classes={classes}
          title="Організація"
          titleWidth={90}
          value={selectedOrganization}
          onChange={changeOrganization}
        >
          { organizations.map(NamedMenuItem) }
        </PlotSelect>
      </Grid>
      <Grid item xs={6}>
        <PlotSelect
          classes={classes}
          title="Програма"
          titleWidth={75}
          value={selectedProgram}
          onChange={changeProgram}
        >
          { filteredPrograms.map(programs => programs.map(NamedMenuItem)) }
        </PlotSelect>
      </Grid>
      <Grid item xs={4}>
        <PlotSelect
          classes={classes}
          title="Група"
          titleWidth={45}
          value={selectedGroup}
          onChange={changeGroup}
        >
          { filteredGroups.map(groups => groups.map(NamedMenuItem)) }
        </PlotSelect>
      </Grid>
    </Grid>
  );
};

GroupFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  organizations: PropTypes.array.isRequired,
  selectedOrganization: PropTypes.string.isRequired,
  selectedProgram: PropTypes.string.isRequired,
  selectedGroup: PropTypes.string.isRequired,
  changeOrganization: PropTypes.func.isRequired,
  changeProgram: PropTypes.func.isRequired,
  changeGroup: PropTypes.func.isRequired,
};

export default GroupFilter;
