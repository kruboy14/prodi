import React from 'react';
import { useParams } from 'react-router-dom';
import PageError from '../../../components/PageError';
interface ParamTypes {
  articleId: string;
}

const Article = () => {
  const { articleId } = useParams<ParamTypes>();
  if (!true) {
    return <PageError />;
  }
  return <div>Article {articleId}</div>;
};

export default Article;
