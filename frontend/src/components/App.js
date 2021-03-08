import React from 'react';

import { Redirect, useLocation, Route, Switch } from "react-router-dom";


import AppHeaderBar from './app_header_bar/AppHeaderBar.js';
import Box from '@material-ui/core/Box';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';


import LandingPage from './landing_page/LandingPage';
import DashboardPage from './dashboard_page/DashboardPage.js';
import SignupPage from './signup_page/SignupPage';
import LoginPage from './login_page/LoginPage';



export default function App() {
  const location = useLocation();
  
  const authenticated = useSelector((state) => state.auth.authenticated);

  const withAuth = (component) => {
    if (!authenticated) {
      parseQueryParamsAndShowMessage();
      return <Redirect to={"/login"} />;
    }

    return component;
  };

  return (
    <div>
      <AppHeaderBar />
      <Switch>
        <Route exact path="/dashboard" render={()=> withAuth(DashboardPage)} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/" component={LandingPage} />
        <Box height={20} width={1} bgcolor="deeppink"></Box>
      </Switch>
    </div>
  );
}