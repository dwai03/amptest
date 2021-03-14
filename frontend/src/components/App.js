import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


import AppHeaderBar from './app_header_bar/AppHeaderBar.js';
import Box from '@material-ui/core/Box';


import LoginPage from './login_page/LoginPage';
import DashboardPage from './dashboard_page/DashboardPage.js';
import SignupPage from './signup_page/SignupPage';
import LandingPage from './landing_page/LandingPage';
import OtherPage from './other_page/OtherPage';

function PrivateRoute({ children, ...rest }) {
  const tempAuth = useSelector(state => state.auth.authenticated)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        tempAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function AuthRoute({ children, ...rest }) {
  const tempAuth = useSelector(state => state.auth.authenticated)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !tempAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function App() {

  return (
    <div>
      <AppHeaderBar />
      <Switch>

        <PrivateRoute path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <AuthRoute exact path="/signup">
          <SignupPage />
        </AuthRoute>
        <AuthRoute exact path="/login">
          <LoginPage />
        </AuthRoute>
        <Route path="/landing">
          <LandingPage />
        </Route>
        <AuthRoute path="/">
          <OtherPage />
        </AuthRoute>


        <Box height={20} width={1} bgcolor="deeppink"></Box>
      </Switch>
    </div>
  );
}