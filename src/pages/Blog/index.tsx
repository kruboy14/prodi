import React from 'react';
import styles from './Blog.module.scss'
import ArticleItem from '../../components/ArticleItem';
const Site: React.FC<any> = () => {
 

  
  return (
    <div className={styles.container}>
      <ArticleItem
      
        imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
        title="Here are some things you should know regarding how we work "
      />
        <ArticleItem
        className={styles.item}
        imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
        title="Here are some things you should know regarding how we work "
      />
        <ArticleItem
        className={styles.item}
        imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
        title="Here are some things you should know regarding how we work "
      />
        <ArticleItem
        className={styles.item}
        imgUrl="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2017-05/0x060a2b340101010201010f12132626ed011ab9049177058001b9000D3A162A40_0.jpeg?itok=jaV2AijZ"
        title="Here are some things you should know regarding how we work "
      />
    </div>
  );
};

export default Site;
