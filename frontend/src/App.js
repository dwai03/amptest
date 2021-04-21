import React from "react";
import { Route, Switch } from "react-router-dom";

import Box from "@material-ui/core/Box";

import AppHeaderBar from "./components/app_header_bar/AppHeaderBar.js";
import NavBar from "./components/common/Header.js";
import LoginPage from "./pages/login_page/LoginPage";
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
        <PrivateRoute exact path="/dashboard">
          <NavBar />  
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <NavBar />  
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute exact path="/workflow">
          <NavBar />  
          <WorkflowPage />
        </PrivateRoute>
        <AuthRoute exact path="/signup">
          <Signup_page />
        </AuthRoute>
        <AuthRoute exact path="/login">
          <NavBar />  
          <LoginPage />
        </AuthRoute>
        <Route path="/become-creator">
          <NavBar />  
          <BecomeCreatorPage />
        </Route>
        <AuthRoute path="/">
          <NavBar />  
          <Landing_page />
        </AuthRoute>
        <Box height={20} width={1} bgcolor="deeppink"></Box>
      </Switch>
      {/* Footer isn't everywhere<Footer /> */}
      
    </div>
  );
}
