import React from "react";
import { Route, Switch } from "react-router-dom";

import Box from "@material-ui/core/Box";

import AppHeaderBar from "./components/app_header_bar/AppHeaderBar.js";
import NavBar from "./components/common/Header.js";
import LoginPage from "./pages/login_page/LoginPage";
import DashboardPage from "./pages/dashboard_page/DashboardPage.js";
import SignupPage from "./pages/signup_page/SignupPage";
import LandingPage from "./pages/landing_page/LandingPage";
import BecomeCreatorPage from "./pages/become_creator_page/BecomeCreatorPage";
import WorkflowPage from "./pages/workflow_page/WorkflowPage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import Footer from "./components/common/Footer";

import { AuthRoute, PrivateRoute } from "./utils/route_util";

export default function App() {
  return (
    <div>
      <NavBar />
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
      <Footer />
    </div>
  );
}
