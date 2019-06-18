import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../containers/signIn/SignIn';
import {
  UPLOAD_STATS,
  SIGN_IN,
  STATS,
} from '../utils/routes';
import StatsSender from '../containers/statsSender/StatsSender';
import StatsPlot from '../containers/StatsPlot';

const ContentRoutes = ({ authenticated }) => (
  <Switch>
    <Route exact path={STATS} component={StatsPlot}/>
    <Route exact path={UPLOAD_STATS} component={StatsSender}/>
    <Route exact path={SIGN_IN} render={() => (
      authenticated ? (
        <Redirect to={STATS}/>
      ) : (
        <SignIn/>
      )
    )}/>
    <Redirect to={STATS} />
  </Switch>
);

ContentRoutes.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default ContentRoutes;
