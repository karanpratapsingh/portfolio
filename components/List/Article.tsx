import React, { memo, useCallback } from 'react';
import { Article } from '../../types';
import ArticleCard from '../Card/Article';
import { SubHeaderProps } from '../SubHeader';
import BaseList from './Base';

interface ArticleListProps extends SubHeaderProps {
  articles: Article[];
}

function ArticleList(props: ArticleListProps): React.ReactElement {
  const { title, description, articles } = props;

  const renderArticlesList = useCallback(
    (article: Article): React.ReactNode => {
      const { title, description, url, tags, publishedAt } = article;

      return (
        <ArticleCard
          title={title}
          description={description}
          url={url}
          tags={tags}
          publishedAt={publishedAt}
        />
      );
    },
    [],
  );

  return (
    <BaseList
      title={title}
      description={description}
      data={articles}
      renderList={renderArticlesList}
    />
  );
}

export default memo(ArticleList);
