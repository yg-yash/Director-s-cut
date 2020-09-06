import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({ component: C, appProps, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !appProps.isAuthenticated ? (
        <C {...props} {...appProps} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
