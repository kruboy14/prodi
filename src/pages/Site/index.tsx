import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Site.module.scss'

const Site: React.FC<any> = () => {
  
  return <div className={styles.container}>
    <Header/>
    <Footer/>
  </div>;
};

export default Site;
