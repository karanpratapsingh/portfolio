/* eslint-disable @next/next/no-img-element */
import { Skeleton } from 'antd';
import React, { useCallback } from 'react';
import { SubHeader } from '..';
import { Project } from '../../config';
import { Article, Video } from '../../types';
import { Card } from '../Card';
import { SubHeaderProps } from '../SubHeader';

type BaseListData = any;

interface BaseListProps extends SubHeaderProps {
  data: BaseListData[];
  renderList: (item: BaseListData) => React.ReactNode;
}

function BaseList(props: BaseListProps): React.ReactElement {
  const { data, renderList, title, description } = props;

  function renderPlaceholder(): React.ReactNode {
    return (
      <div className='list flex flex-shrink-0 rounded w-72 lg:w-80 h-40 overflow-hidden mr-2'>
        <Skeleton.Avatar
          active
          shape='square'
          style={{ height: 160, width: 400 }}
        />
      </div>
    );
  }

  let list: React.ReactNode = React.Children.toArray(data.map(renderList));

  if (!data.length) {
    const data = new Array(6).fill(0);
    list = React.Children.toArray(data.map(renderPlaceholder));
  }

  return (
    <div className='pb-5'>
      <SubHeader title={title} description={description} />
      <div className='list flex overflow-auto pl-6 lg:pl-10 py-2'>{list}</div>
    </div>
  );
}

interface ProjectListProps extends SubHeaderProps {
  projects: Project[];
  onProject: (project: Project) => void;
}

function ProjectList(props: ProjectListProps): React.ReactElement {
  const { title, description, projects, onProject } = props;

  function renderProjectsList(project: Project): React.ReactNode {
    const { title, description, banner } = project;

    function onProjectClick(): void {
      onProject(project);
    }

    return (
      <Card.Project
        title={title}
        description={description}
        banner={banner}
        onClick={onProjectClick}
      />
    );
  }

  return (
    <BaseList
      title={title}
      description={description}
      data={projects}
      renderList={renderProjectsList}
    />
  );
}

interface ArticleListProps extends SubHeaderProps {
  articles: Article[];
}

function ArticleList(props: ArticleListProps): React.ReactElement {
  const { title, description, articles } = props;

  function renderArticlesList(article: Article): React.ReactNode {
    const { title, description, url, tags, publishedAt } = article;

    return (
      <Card.Article
        title={title}
        description={description}
        url={url}
        tags={tags}
        publishedAt={publishedAt}
      />
    );
  }

  return (
    <BaseList
      title={title}
      description={description}
      data={articles}
      renderList={renderArticlesList}
    />
  );
}

interface VideoListProps extends SubHeaderProps {
  videos: Video[];
}

function VideoList(props: VideoListProps): React.ReactElement {
  const { title, description, videos } = props;

  function renderVideoList(video: Video): React.ReactNode {
    return <Card.Video id={video.id} />;
  }

  return (
    <BaseList
      title={title}
      description={description}
      data={videos}
      renderList={renderVideoList}
    />
  );
}

interface ScreenShotListProps {
  screenshots: string[];
}

function ScreenShotList(props: ScreenShotListProps): React.ReactElement {
  const { screenshots } = props;

  const renderScreenShotList = useCallback((screenshot: string) => {
    return (
      <div className='flex-shrink-0 mr-2'>
        <img
          src={screenshot}
          className='h-80 lg:h-96'
          alt='project screenshot'
        />
      </div>
    );
  }, []);

  return (
    <SubHeader
      title='Screenshots'
      description={
        <div className='flex overflow-auto'>
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </div>
      }
    />
  );
}

export const List = {
  Project: ProjectList,
  Article: ArticleList,
  Video: VideoList,
  ScreenShot: ScreenShotList,
};
