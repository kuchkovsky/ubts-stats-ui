import React from 'react';
import { hot } from 'react-hot-loader/root';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DayJSUtils from '@date-io/dayjs';
import Content from '../containers/Content';
import AppToolbar from '../containers/AppToolbar';
import AppDrawer from '../containers/AppDrawer';

const App = () => (
  <MuiPickersUtilsProvider utils={DayJSUtils}>
    <CssBaseline/>
    <AppToolbar/>
    <AppDrawer/>
    <Content/>
  </MuiPickersUtilsProvider>
);

export default hot(App);
