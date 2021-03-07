import React from 'react';
import Box from '@material-ui/core/Box';

import AppHeaderBar from './app_header_bar/AppHeaderBar.js';
import Dashboard from './dashboard_page/DashboardPage.js';
import { Switch, Route } from "react-router-dom";

import LandingPage from './landing_page/LandingPage';
// import { AuthRoute, ProtectedRoute } from '../utils/route_util';


export default function App() {
  return (
    <div>
      <AppHeaderBar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        {/* <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <ProtectedRoute path="/" component={Dashboard} /> */}
        <Route path="/" component={LandingPage} />
        <Box height={20} width={1} bgcolor="deeppink"></Box>
      </Switch>
    </div>
  );
}