import React from 'react';
import styles from './Blog.module.scss';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import ArticleItem from '../../components/ArticleItem';

const Site: React.FC<any> = () => {
  const id = '1';
  return (
    <div className={styles.container}>
      <Link to={id}>
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
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
          <Link to={id} className={styles.item}>
            <ArticleItem
              className={styles.itemContent}
              imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
              title="Here are some things you should know regarding how we work "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Site;
