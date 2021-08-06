import Image from 'next/image';
import { Card, Tag } from 'antd';
import { TagColor } from '../config';
import React from 'react';
import dataFormat from 'dateformat';

interface BaseProps {
  title: string;
  description: string;
  onClick: () => void;
}

interface ProjectCardProps extends BaseProps {
  banner: string;
}

export function ProjectCard(props: ProjectCardProps): React.ReactElement {
  const { title, banner, description, onClick } = props;

  return (
    <Card
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
      <div className='flex flex-col p-4'>
        <span className='text-lg font-bold'>{title}</span>
        <p className='text-sm font-light line-clamp-2'>{description}</p>
      </div>
    </Card>
  );
}

interface ArticleCardProps extends BaseProps {
  tags: string[];
  publishedAt: Date;
}

export function ArticleCard(props: ArticleCardProps): React.ReactElement {
  const { title, description, tags, publishedAt, onClick } = props;

  const date = dataFormat(publishedAt, 'mmm dS, yyyy');

  function renderTags(tag: string): React.ReactNode {
    return <Tag color={TagColor[tag]}>{tag}</Tag>;
  }

  return (
    <Card className='flex-shrink-0 mr-2 rounded w-72 lg:w-80 cursor-pointer' onClick={onClick}>
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
    </Card>
  );
}

interface VideoCardProps {
  id: string
}

export function VideoCard(props: VideoCardProps): React.ReactElement {
  const { id } = props;

  return (
    <Card
      className='flex-shrink-0 mr-2 rounded w-72 lg:w-80 cursor-pointer'>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
}
