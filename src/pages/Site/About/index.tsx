import React from 'react';
import styles from './About.module.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
const About = () => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.textTitle}>Hi, i’m Diana Prosyanik</div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
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
        <div className={styles.socialContent}>
          <a href="#">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="#">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="#">
            <TelegramIcon fontSize="large" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
