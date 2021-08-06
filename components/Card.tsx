import Image from 'next/image';
import { Card, Tag } from 'antd';
import { TagColor } from '../config';
import React from 'react';

interface BaseProps {
  title: string;
  description: string;
}

interface ProjectCardProps extends BaseProps {
  banner: string;
}

export function ProjectCard(props: ProjectCardProps): React.ReactElement {
  const { title, banner, description } = props;

  return (
    <Card
      className='flex-shrink-0 mr-2 rounded w-72 lg:w-80 cursor-pointer'
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
}

export function ArticleCard(props: ArticleCardProps): React.ReactElement {
  const { title, description, tags } = props;

  function renderTags(tag: string): React.ReactNode {
    return <Tag color={TagColor[tag]}>{tag}</Tag>;
  }

  return (
    <Card className='flex-shrink-0 mr-2 rounded w-72 lg:w-80 cursor-pointer'>
      <div className='flex flex-col p-6'>
        <span className='text-lg font-bold truncate text-ellipsis'>
          {title}
        </span>
        <ul className='flex my-2'>
          {React.Children.toArray(tags.map(renderTags))}
        </ul>
        <span className='text-sm font-light line-clamp-2'>{description}</span>
      </div>
    </Card>
  );
}
