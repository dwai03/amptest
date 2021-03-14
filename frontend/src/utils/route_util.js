import React from 'react'
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ children, ...rest }) {
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

export function AuthRoute({ children, ...rest }) {
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
