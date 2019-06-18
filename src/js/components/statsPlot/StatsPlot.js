import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
} from 'react-vis';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import StatsToolbar from './StatsToolbar';

const prayerColor = 'green';
const christWitnessesColor = 'blue';

const styles = theme => ({
  card: {
    backgroundColor: theme.palette.background.paper,
  },
  titleGrid: {
    marginTop: 10,
  },
  labelGrid: {
    marginBottom: 10,
  },
  prayerLabel: {
    color: prayerColor,
  },
  christWitnessesLabel: {
    color: christWitnessesColor,
  },
});

const StatsPlot = props => {
  const { emptyList, records, loadStats } = props;

  const { classes, ...rest } = props;

  useEffect(() => {
    if (!emptyList && !records.length) {
      loadStats();
    }
  }, []);

  const dummy = [{ x: new Date(), y: 0 }];
  const prayerData = !records.length ? dummy : records
    .map(record => ({ x: new Date(record.date), y: record.prayerMinutes }));

  const christWitnessesData = !records.length ? dummy : records
    .map(record => ({ x: new Date(record.date), y: record.christWitnesses }));

  return (
    <Card className={classes.card}>
      <StatsToolbar {...rest}/>
      <Grid container alignItems="center" justify="center" className={classes.titleGrid}>
        <Grid item>
          <Typography variant="h5">
            Графіки
          </Typography>
        </Grid>
      </Grid>
      <XYPlot
        xType="time"
        width={970}
        height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <LineMarkSeries data={prayerData} stroke={prayerColor} fill={prayerColor}/>
        <XAxis title="Дата"/>
        <YAxis title="Хвилини"/>
      </XYPlot>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={8}
        className={classes.labelGrid}
      >
        <Grid item>
          <Typography variant="subtitle1" className={classes.prayerLabel}>
            Хвилини в спілкуванні з Богом
          </Typography>
        </Grid>
      </Grid>
      <XYPlot
        xType="time"
        width={970}
        height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <LineMarkSeries
          data={christWitnessesData}
          stroke={christWitnessesColor}
          fill={christWitnessesColor}
        />
        <XAxis title="Дата"/>
        <YAxis title="Кількість людей"/>
      </XYPlot>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={8}
        className={classes.labelGrid}
      >
        <Grid item>
          <Typography variant="subtitle1" className={classes.christWitnessesLabel}>
            Кількість людей, яким було засвідчено про Христа
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

StatsPlot.propTypes = {
  classes: PropTypes.object.isRequired,
  emptyList: PropTypes.bool.isRequired,
  records: PropTypes.array.isRequired,
  loadStats: PropTypes.func.isRequired,
};

export default withStyles(styles)(StatsPlot);
