import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

const Header: React.FC = () => {
  const { path } = useRouteMatch();
  const [IsBurgerOpen, setIsBurgerOpen] = useState(false)
  const hanldeBurgerClick = () =>{
    setIsBurgerOpen((prev) => !prev)
  }
  return (
    <header className={styles.container}>
      <div className={styles.logo}>ProDi</div>
      <nav>
        <ul className={styles.menu}>
          <li
            className={classNames({
              [styles.menuItem]: true,
              [styles.itemActive]: path === '/',
            })}>
            <Link to="/">Blog</Link>
          </li>
          <li
            className={classNames({
              [styles.menuItem]: true,
              [styles.itemActive]: path === '/about',
            })}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div onClick={hanldeBurgerClick} className={classNames({[styles.burger]: true, [styles.open]: IsBurgerOpen})}>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;
