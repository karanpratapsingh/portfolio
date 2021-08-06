import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';
import * as API from '../api';
import {
  ArticleCard,
  Banner,
  Conditional,
  Footer,
  Header,
  List,
  ProjectCard,
  SubHeader,
  VideoCard
} from '../components';
import config from '../config';
import projects, { Project } from '../config/projects';
import { Article, Video } from '../types';

interface HomeStaticProps {
  videos: Video[];
  articles: Article[];
}

export default function Home(props: HomeStaticProps) {
  const { articles, videos } = props;

  function renderProjectsList(project: Project): React.ReactNode {
    const { title, description, banner } = project;

    function onProjectClick(): void {
      console.log('CLICKED', title);
    }

    return (
      <ProjectCard
        title={title}
        description={description}
        banner={banner}
        onClick={onProjectClick}
      />
    );
  }

  function renderArticlesList(article: Article): React.ReactNode {
    const { title, description, tags, publishedAt, url } = article;

    function onArticleClick(): void {
      console.log(url);
    }

    return (
      <ArticleCard
        title={title}
        description={description}
        tags={tags}
        publishedAt={new Date(publishedAt)}
        onClick={onArticleClick}
      />
    );
  }

  function renderVideoList(video: Video): React.ReactNode {
    return <VideoCard id={video.id} />;
  }

  const showArticles = Boolean(config.articles);
  const showVideos = Boolean(config.videos);

  return (
    <div className='flex flex-col'>
      <div>
        <Header />
        <Banner />
      </div>

      {/* <LegacyList /> */}

      <List
        title='Portfolio'
        description={`Projects I've worked on recently`}
        data={projects}
        renderList={renderProjectsList}
      />

      <Conditional condition={showArticles}>
        <List
          title='Articles'
          description={`When I'm not writing code, I write articles`}
          data={articles}
          renderList={renderArticlesList}
        />
      </Conditional>

      <Conditional condition={showVideos}>
        <List
          title='Videos'
          description={`I also make videos`}
          data={videos}
          renderList={renderVideoList}
        />
      </Conditional>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const articles = await API.getArticles();
  const videos = await API.getVideos();

  const props: HomeStaticProps = {
    articles,
    videos
  };

  return { props };
}

function LegacyList() {
  return (
    <div className='px-10 py-5'>
      <SubHeader
        title='Portfolio'
        description={`Projects I've worked on recently`}
      />
      <Row gutter={[8, 8]}>
        {projects.map(project => {
          return (
            <Col key={project.id} className='' sm={8} xxl={4}>
              <Card
                hoverable
                className='rounded'
                cover={
                  <Image
                    src={project.banner}
                    height={240}
                    width={400}
                    objectFit='cover'
                    alt='card'
                  />
                }
              >
                <div className='flex flex-col p-6'>
                  <span className='text-lg font-bold'>{project.title}</span>
                  <p className='text-sm font-light line-clamp-2'>
                    {project.description}
                  </p>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  )
}

