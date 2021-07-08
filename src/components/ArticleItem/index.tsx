import classNames from 'classnames';
import React from 'react';
import styles from './ArticleItem.module.scss';

interface ArticleItemProp {
  imgUrl: string;
  title: string;
  className?: any;
}
const ArticleItem: React.FC<ArticleItemProp> = ({
  children,
  imgUrl,
  title,
  className,
}) => {
  return (
    <div className={classNames({ [styles.container]: true, [className]: className })}>
      <img
        className={styles.thumbnail}
        width="300"
        height="200"
        src={imgUrl}
        alt=""
      />
      <div className={styles.title}>
        Here are some things you should know regarding how we work{' '}
      </div>
    </div>
  );
};

export default ArticleItem;
