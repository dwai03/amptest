import React from "react";
import { Route, Switch } from "react-router-dom";

import Box from "@material-ui/core/Box";

import AppHeaderBar from "./components/app_header_bar/AppHeaderBar.js";
import NavBar from "./components/common/Header.js";
import LoginPage from "./pages/login_page/LoginPage";
import Login from "./pages/Login.js";
import DashboardPage from "./pages/dashboard_page/DashboardPage.js";
import Signup_page from "./pages/signup_page/Signup_page";
import Landing_page from "./pages/landing_page/Landing_page";
import BecomeCreatorPage from "./pages/become_creator_page/BecomeCreatorPage";
import WorkflowPage from "./pages/workflow_page/WorkflowPage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import Footer from "./components/common/Footer";

import { AuthRoute, PrivateRoute } from "./utils/route_util";

export default function App() {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login">
          <Login />
        </AuthRoute>
        <div>
          <NavBar />
          <PrivateRoute exact path="/dashboard">
            <DashboardPage />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <ProfilePage />
          </PrivateRoute>
          <PrivateRoute exact path="/workflow">
            <WorkflowPage />
          </PrivateRoute>
          <Route path="/become-creator">
            <BecomeCreatorPage />
          </Route>
          <AuthRoute path="/">
            <Landing_page />
          </AuthRoute>
          <Box height={20} width={1} bgcolor="deeppink"></Box>
        </div>
      </Switch>
      {/* Footer isn't everywhere<Footer /> */}
    </div>
  );
}
