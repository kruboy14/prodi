import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRouter';
import AdminDashBoard from './AdminDashboard';

const Admin = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin/login">
          12
        </Route>
        <PrivateRoute  path="/admin">
          <AdminDashBoard />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default Admin;
