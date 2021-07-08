import React from 'react';
import styles from './About.module.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About</div>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.textTitle}>Hi, i’m Diana Prosyanik</div>
          <div className={styles.text}>
            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              repellat voluptas quisquam consectetur corrupti minima aspernatur,
              assumenda explicabo reprehenderit nobis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Numquam repellat voluptas quisq
              uam consectetur corrupti minima aspernatur,
            </p>

            <p> assumenda explicabo reprehenderit nobis.</p>

            <p>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              repellat voluptas quisquam consectetur corrupti minima aspernatur,
              assumenda explicabo reprehenderit nobis.
            </p>
          </div>
        </div>
        <div>
          <img
            className={styles.img}
            src="https://i.ibb.co/ZG1Phzt/IMG-20201109-162731-894.jpg"
            width="726"
            height="829"
            alt=""
          />
        </div>
      </div>
      <div className={styles.social}>
        <a href="#">
          <FacebookIcon  fontSize='large'/>
        </a>
        <a href="#">
          <InstagramIcon  fontSize='large'/>
        </a>
        <a href="#">
          <TwitterIcon   fontSize='large'/>
        </a>
      </div>
    </div>
  );
};

export default About;
