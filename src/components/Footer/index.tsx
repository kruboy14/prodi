import classNames from 'classnames';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './Footer.module.scss';
const Footer = () => {
  const { path } = useRouteMatch();
  const textLine = 'ProDi '.repeat(50).split(' ');

  return (
    <footer className={styles.container}>
      <div className={styles.line}>
        {textLine.map((val, index) => {
          
          
         return <span key={index} className={classNames({[styles.lineWord]: true ,[styles.big]: (index + 2) % 2 === 0 })}>
            {val}
          </span>;
        })}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>ProDi</div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </div>
        {path === '/about' ? (
          <div className={styles.links}>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        ) : null}
        <div className={styles.copyright}>
          © 2012–2020 Nordic Rose Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
