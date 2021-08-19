import { Card as AntDesignCard, Tag } from 'antd';
import clsx from 'clsx';
import dataFormat from 'dateformat';
import React from 'react';
import { Colors } from '../../config';
import { BaseProps, border, color, dimensions } from './Base';

interface ArticleProps extends BaseProps {
  url: string;
  tags: string[];
  publishedAt: string;
}

function Article(props: ArticleProps): React.ReactElement {
  const { title, description, url, tags, publishedAt } = props;

  const date = dataFormat(new Date(publishedAt), 'mmm dS, yyyy');

  function renderTags(tag: string): React.ReactNode {
    return <Tag color={Colors[tag]}>{tag}</Tag>;
  }

  return (
    <a target='_blank' aria-label={title} href={url} rel='noopener noreferrer'>
      <AntDesignCard
        className={clsx(dimensions, border, color, 'cursor-pointer')}
      >
        <div className='flex flex-col py-4 px-6'>
          <span className='text-lg font-bold truncate text-ellipsis'>
            {title}
          </span>
          <div className='flex my-2'>
            {React.Children.toArray(tags.map(renderTags))}
          </div>
          <span className='text-sm font-light line-clamp-2'>{description}</span>
          <p className='text-xs font-light mt-2 text-right'>{date}</p>
        </div>
      </AntDesignCard>
    </a>
  );
}

export default Article;
