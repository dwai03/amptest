import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppHeaderBar from './header/header.js';
import Dashboard from './dashboard/dashboard.js';

import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../utils/route_util';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://facets.co/">
        facets
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <div>
      <AppHeaderBar/>
      <Dashboard />
      {/* <Route path="/" component={AppHeaderBar}/>
      <Route exact path="/" component={Dashboard} /> */}
      {/* <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/" component={Dashboard} /> */}
      <Copyright />
  </div>
  );
}