import React from "react";
import { Route, Switch } from "react-router-dom";

import Box from "@material-ui/core/Box";

import AppHeaderBar from "./components/app_header_bar/AppHeaderBar.js";
import NavBar from "./components/common/Header.js";
import LoginPage from "./pages/login_page/LoginPage";
import Login from "./pages/Login.js";
import DashboardPage from "./pages/dashboard_page/DashboardPage.js";
import Signup_Type from "./pages/Signup_Type";
import Signup_Desc from "./pages/Signup_Desc";
import Signup_Cat from "./pages/Signup_Cat";
import Signup_Social from "./pages/Signup_Social";
import Landing_page from "./pages/Landing_page";
import BecomeCreatorPage from "./pages/become_creator_page/BecomeCreatorPage";
import WorkflowPage from "./pages/workflow_page/WorkflowPage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import Footer from "./components/common/Footer";
import Creator_info_page from "./pages/Creator_info_page";

import { AuthRoute, PrivateRoute } from "./utils/route_util";
import Signup_User from "./pages/Signup_User.js";

export default function App() {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login">
            <Login />
        </AuthRoute>
        <PrivateRoute exact path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute exact path="/workflow">
          <WorkflowPage />
        </PrivateRoute>
        <AuthRoute exact path="/signuptype">
          <Signup_Type />
        </AuthRoute>
        <AuthRoute exact path="/signupsocial">
          <Signup_Social />
        </AuthRoute>
        <AuthRoute exact path="/signupuser">
          <Signup_User/>
        </AuthRoute>
        <AuthRoute exact path="/signupdesc">
          <Signup_Desc />
        </AuthRoute>
        <AuthRoute exact path="/signupcat">
          <Signup_Cat />
        </AuthRoute>
        <Route path="/creatorinfo">
          <NavBar />
          <Creator_info_page />
        </Route>
        <AuthRoute path="/">
          <NavBar />
          <Landing_page />
        </AuthRoute>
      </Switch>
    </div>
  );
}
