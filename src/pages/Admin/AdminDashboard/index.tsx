import React from 'react';
import { Switch, useLocation } from 'react-router-dom';

import PrivateRoute from '@/routes/PrivateRouter';
import Editor from '@components/Admin/Editor';
import SideBar from '@components/Admin/SideBar';

import styles from './AdminDashboard.module.scss';

const AdminDashBoard = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.main}>
        <Switch>
          <PrivateRoute exact path="/admin/editor">
            <Editor />
          </PrivateRoute>
          <PrivateRoute exact path="/admin/posts">
            posts posts
          </PrivateRoute>
          <PrivateRoute path="/admin/posts/add">
            <Editor />
          </PrivateRoute>
          <PrivateRoute path="/admin/*">{pathname}</PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default AdminDashBoard;
