import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './MenuItem.module.scss';

interface MenuItemProp {
  item: any;
  className: string;
}

const MenuItem: FC<MenuItemProp> = ({ item, className }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <li
        onClick={item.subNav && showSubnav}
        className={classNames({
          [className]: className,
          [styles.item]: true,
        })}>
        {item.icon}
        <span>{item.title}</span>

        {item.subNav && subnav
          ? item.iconOpened
          : item.subNav
          ? item.iconClosed
          : null}
      </li>

      {item.subNav && (
        <CSSTransition
          in={subnav}
          timeout={300}
          classNames={{
            enter: styles['subNav-enter'],
            exit: styles['subNav-exit'],
            enterActive: styles['subNav-enter-active'],
            exitActive: styles['subNav-exit-active'],
          }}
          unmountOnExit>
          <ul>
            {
              // @ts-ignore
              item.subNav.map((item, index) => {
                return (
                  <Link to={item.path} key={index}>
                    <li
                      className={classNames({
                        [className]: className,
                        [styles.item]: true,
                        [styles.itemSub]: true,
                      })}>
                      {item.icon}
                      <span>{item.title}</span>
                    </li>
                  </Link>
                );
              })
            }
          </ul>
        </CSSTransition>
      )}
    </>
  );
};

export default MenuItem;
