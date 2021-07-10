import React, { useEffect } from 'react';
import styles from './Blog.module.scss';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import ArticleItem from '../../components/ArticleItem';
import { useState } from 'react';
import { useRef } from 'react';
import useScroll from '../../hooks/useScroll';
import { useCallback } from 'react';
interface IFecthArticle {
  limit: number;
  page: number;
  albumPage: number;
}
interface IArticle {
  id: number;
  url: string;
  title: string;
}
const Site: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [page, setPage] = useState<number>(1);
  const [albumPage, setAlbumPage] = useState<number>(1);

  const observeRef = useRef<HTMLDivElement>(null);
  const limit = 10;
  const func = useCallback(() => {
    fetchArticle({ page, limit, albumPage });
  }, [page, limit, albumPage]);
  const intersected = useScroll(observeRef, () => func());

  function fetchArticle({ limit, page, albumPage }: IFecthArticle) {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumPage}/photos?_limit=${limit}&_page=${page}`,
    )
      .then((response) => response.json())
      .then((response) => {
        setArticles((prev) => [
          ...prev,
          ...response.map(({ id, title, url }: IArticle) => ({
            id,
            title,
            url,
          })),
        ]);
        setPage((prev) => prev + 1);
        if (page >= 5) {
          setPage(1);
          setAlbumPage((prev) => prev + 1);
        }
      });
  }

  useEffect(() => {
    console.log(articles);
  }, [articles]);
  return (
    <div className={styles.container}>
      <Link to={'1'}>
        <ArticleItem
          imgWidth={8}
          imgHeight={5}
          style={{
            title: { fontSize: '34px', maxWidth: '700px', fontWeight: 'bold' },
            root: {
              marginBottom: '5%',
              marginRight: '2.5%',
              marginLeft: '2.5%',
            },
          }}
          className={styles.itemContent}
          imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
          title="Here are some things sdaaaaaaaaaaaaaaaada dada da sd sadyou should know regarding how we work "
        />
      </Link>
      <div className={styles.articlesSection}>
        <Divider />
        <div className={styles.articlesTitle}>All articles</div>
        <div className={styles.articlesList}>
          {articles.map(({ id, url, title }) => (
            <Link key={id} to={String(id)} className={styles.item}>
              <ArticleItem
                className={styles.itemContent}
                imgUrl={url}
                title={title}
              />
            </Link>
          ))}
          <div ref={observeRef} />
        </div>
      </div>
    </div>
  );
};

export default Site;
