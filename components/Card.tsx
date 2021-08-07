import Image from 'next/image';
import { Card as AntDesignCard, Tag } from 'antd';
import { TagColor } from '../config';
import React from 'react';
import dataFormat from 'dateformat';

interface BaseProps {
  title: string;
  description: string;
  onClick?: () => void;
}

interface ProjectProps extends BaseProps {
  banner: string;
}

function Project(props: ProjectProps): React.ReactElement {
  const { title, banner, description, onClick } = props;

  return (
    <AntDesignCard
      className='flex-shrink-0 mr-2 rounded w-72 lg:w-80 cursor-pointer'
      onClick={onClick}
      cover={
        <Image
          loading='eager'
          src={banner}
          height={240}
          width={400}
          objectFit='cover'
          alt={title}
        />
      }
    >
      <div className='flex flex-col pt-2 pb-4 px-6'>
        <span className='text-lg font-bold'>{title}</span>
        <p className='mt-1 text-sm font-light line-clamp-2'>{description}</p>
      </div>
    </AntDesignCard>
  );
}

interface ArticleProps extends BaseProps {
  url: string;
  tags: string[];
  publishedAt: string;
}

function Article(props: ArticleProps): React.ReactElement {
  const { title, description, url, tags, publishedAt } = props;

  const date = dataFormat(new Date(publishedAt), 'mmm dS, yyyy');

  function renderTags(tag: string): React.ReactNode {
    return <Tag color={TagColor[tag]}>{tag}</Tag>;
  }

  return (
    <a target='_blank' href={url} rel='noopener noreferrer'>
      <AntDesignCard className='flex-shrink-0 mr-2 rounded w-72 lg:w-80 cursor-pointer'>
        <div className='flex flex-col py-4 px-6'>
          <span className='text-lg font-bold truncate text-ellipsis'>
            {title}
          </span>
          <ul className='flex my-2'>
            {React.Children.toArray(tags.map(renderTags))}
          </ul>
          <span className='text-sm font-light line-clamp-2'>{description}</span>
          <p className='text-xs font-light mt-2 text-right'>{date}</p>
        </div>
      </AntDesignCard>
    </a>
  );
}

interface VideoProps {
  id: string;
}

function Video(props: VideoProps): React.ReactElement {
  const { id } = props;

  return (
    <AntDesignCard className='flex-shrink-0 mr-2 rounded w-72 lg:w-80 cursor-pointer'>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </AntDesignCard>
  );
}

export const Card = {
  Project,
  Article,
  Video
}
