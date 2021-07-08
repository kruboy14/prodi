import classNames from 'classnames';
import React from 'react';
import styles from './ArticleItem.module.scss';

interface ArticleItemProp {
  imgUrl: string;
  title: string;
  className?: any;
  style?: {
    root?: React.CSSProperties;
    img?: React.CSSProperties;
    title?: React.CSSProperties;
  };
}
const ArticleItem: React.FC<ArticleItemProp> = ({
  children,
  imgUrl,
  title,
  className,
  style,
}) => {
  return (
    <div
      style={{...style?.root}}
      className={classNames({
        [styles.container]: true,
        [className]: className,
        
      })}>
      <img style={{...style?.img}} className={styles.thumbnail} src={imgUrl} alt="" />
      <div style={{ ...style?.title }} className={styles.title}>
        Here are some things you should know regarding how we 
      </div>
    </div>
  );
};

export default ArticleItem;
