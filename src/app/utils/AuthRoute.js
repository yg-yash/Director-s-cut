import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, auth, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.loginReducer);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AuthRoute;
