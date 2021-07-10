import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { useEffect } from 'react';

interface IMenuItem {
  path: string;
  value: string;
}

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [IsBurgerOpen, setBurgerOpen] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([
    {
      path: '/',
      value: 'Blog',
    },
    {
      path: '/about',
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
      <Link to='/'> <h1 className={styles.logo}>ProDi</h1> </Link>
        <nav>
          <ul className={styles.menu}>
            {menuItems.map(({ value, path }, index) => (
              <Link to={path}>
                <li
                  key={index}
                  className={classNames({
                    [styles.menuItem]: true,
                    [styles.itemActive]: pathname === path,
                  })}>
                  {value}
                </li>
              </Link>
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
          {menuItems.map(({ value, path }, index) => (
            <Link to={path}>
              <li onClick={() =>  setBurgerOpen((prev) => !prev)}
                key={index}
                style={{ transition: `${index + 1 * 0.25 + 0.25}s` }}
                className={classNames({
                  [styles.burgerMenuItem]: true,
                  [styles.open]: IsBurgerOpen,
                })}>
                {value}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
