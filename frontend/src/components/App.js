import React from 'react';
import { Route, Switch } from "react-router-dom";

import Box from '@material-ui/core/Box';

import AppHeaderBar from './app_header_bar/AppHeaderBar.js';

import LoginPage from './login_page/LoginPage';
import DashboardPage from './dashboard_page/DashboardPage.js';
import SignupPage from './signup_page/SignupPage';
import LandingPage from './landing_page/LandingPage';
import BecomeCreatorPage from './become_creator_page/BecomeCreatorPage';
import WorkflowPage from './workflow_page/WorkflowPage';
import ProfilePage from './profile_page/ProfilePage';

import { AuthRoute, PrivateRoute } from '../utils/route_util';

export default function App() {

  return (
    <div>
      <AppHeaderBar />
      <Switch>
        <PrivateRoute exact path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute exact path="/workflow">
          <WorkflowPage />
        </PrivateRoute>
        <AuthRoute exact path="/signup">
          <SignupPage />
        </AuthRoute>
        <AuthRoute exact path="/login">
          <LoginPage />
        </AuthRoute>
        <Route path="/become-creator">
          <BecomeCreatorPage />
        </Route>
        <AuthRoute path="/">
          <LandingPage />
        </AuthRoute>

        <Box height={20} width={1} bgcolor="deeppink"></Box>
      </Switch>
    </div>
  );
}