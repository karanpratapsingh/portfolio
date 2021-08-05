import Image from 'next/image';
import { Card, Tag } from 'antd';
import { TagColor } from '../config';
import { isDesktop } from 'react-device-detect';
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
      hoverable={isDesktop}
      className='rounded w-72 lg:w-80'
      cover={
        <Image
          src={banner}
          height={240}
          width={400}
          objectFit='cover'
          alt="card" />
      }
    >
      <div className='flex flex-col p-4'>
        <span className='text-lg font-bold'>{title}</span>
        <p className='text-sm font-light line-clamp-2'>{description}</p>
      </div>
    </Card>
  )
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
    <Card
      hoverable={isDesktop}
      className='rounded w-72 lg:w-80'
    >
      <div className='flex flex-col p-6'>
        <span className='text-lg font-bold truncate text-ellipsis'>{title}</span>
        <ul className='flex my-2'>
          {React.Children.toArray(tags.map(renderTags))}
        </ul>
        <span className='text-sm font-light line-clamp-2'>{description}</span>
      </div>
    </Card>
  )
}
