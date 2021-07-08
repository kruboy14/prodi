import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { useEffect } from 'react';

interface IMenuItem {
  pathname: string;
  value: string;
}

const Header: React.FC = () => {
  const { path } = useRouteMatch();
  const [IsBurgerOpen, setBurgerOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([
    {
      pathname: '/',
      value: 'Blog',
    },
    {
      pathname: '/about',
      value: 'About',
    },
  ]);
  const hanldeBurgerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setBurgerOpen((prev) => !prev);
  };
  useEffect(() => {
    document.body.style.overflow = IsBurgerOpen ? 'hidden' : 'auto';
  }, [IsBurgerOpen]);
  return (
    <>
      <header className={styles.container}>
        <div className={styles.logo}>ProDi</div>
        <nav>
          <ul className={styles.menu}>
            {menuItems.map(({ value, pathname }, index) => (
              <li
                key={index}
                className={classNames({
                  [styles.menuItem]: true,
                  [styles.itemActive]: path === pathname,
                })}>
                <Link to={pathname}>{value}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={hanldeBurgerClick}
          className={classNames({
            [styles.burger]: true,
            [styles.open]: IsBurgerOpen,
          })}>
          <span />
          <span />
          <span />
        </div>
      </header>
      <nav
        className={classNames({
          [styles.burgerMenu]: true,
          [styles.open]: IsBurgerOpen,
        })}>
        <ul className={styles.burgerMenuList}>
          {menuItems.map(({ value, pathname }, index) => (
            <li
              key={index}
              style={{ transition: `${index + 1 * 0.25 + 0.25}s` }}
              className={classNames({
                [styles.burgerMenuItem]: true,
                [styles.open]: IsBurgerOpen,
              })}>
              <Link to={pathname}>{value}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>Lorem*100</main>
    </>
  );
};

export default Header;
