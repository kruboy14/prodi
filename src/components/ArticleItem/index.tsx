import classNames from 'classnames';
import React from 'react';
import styles from './ArticleItem.module.scss';

interface ArticleItemProp {
  imgUrl: string;
  title: string;
  className?: any;
  imgHeight?: number | string;
  imgWidth?: number| string;
  style?: {
    root?: React.CSSProperties;
    img?: React.CSSProperties;
    title?: React.CSSProperties;
  };
}
const ArticleItem: React.FC<ArticleItemProp> = ({
  children,
  imgUrl,
  imgWidth,
  imgHeight,
  title,
  className,
  style,
}) => {
  return (
    <article
      style={{...style?.root}}
      className={classNames({
        [styles.container]: true,
        [className]: className,
        
      })}>
      <img style={{...style?.img}} width={imgWidth} height={imgHeight} className={styles.thumbnail} src={imgUrl} alt="" />
      <div style={{ ...style?.title }} className={styles.title}>
        Here are some things you should know regarding how we 
      </div>
    </article>
  );
};

export default ArticleItem;
