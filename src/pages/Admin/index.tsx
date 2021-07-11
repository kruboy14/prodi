import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRouter';
import AdminDashBoard from './AdminDashboard';

const Admin = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/admin">
          <AdminDashBoard/>
        </PrivateRoute>

        <Route exact path="/admin/login">
          12
        </Route>
      </Switch>
    </div>
  );
};

export default Admin;
