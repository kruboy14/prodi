import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRouter';

const Admin = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/admin">
          121
        </PrivateRoute>

        <Route exact path="/admin/login">
          12
        </Route>
      </Switch>
    </div>
  );
};

export default Admin;
