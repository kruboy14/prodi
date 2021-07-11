import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '@components/Header';
import About from './About';
import Blog from './Blog';
import Article from './Article';

import styles from './Site.module.scss';

const Site: React.FC<any> = () => {
  let { path, url } = useRouteMatch();
  console.log(`${path}/:topicId`, url);

  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Blog />
        </Route>

        <Route path={`/:articleId`}>
          <Article />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Site;
