import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
  let auth = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/admin/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
