import React from 'react';

import { Route, Switch } from "react-router-dom";


import AppHeaderBar from './app_header_bar/AppHeaderBar.js';
import Box from '@material-ui/core/Box';


import LoginPage from './login_page/LoginPage';
import DashboardPage from './dashboard_page/DashboardPage.js';
import SignupPage from './signup_page/SignupPage';
import LandingPage from './landing_page/LandingPage';



export default function App() {
  const withAuth = (Component) => {
    if (!authenticated) {
      return <Redirect to={Routes.LOGIN} />;
    }

    return Component;
  };

  return (
    <div>
      <AppHeaderBar />
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/" component={LandingPage} />
        <Box height={20} width={1} bgcolor="deeppink"></Box>
      </Switch>
    </div>
  );
}