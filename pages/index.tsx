import React, { useState } from 'react';
import * as API from '../api';
import {
  Banner,
  BottomSheet,
  Card,
  Conditional,
  Header,
  Layout,
  List,
} from '../components';
import config, { Project, projects } from '../config';
import { useBoolean } from '../hooks/useBoolean';
import { Article, Video } from '../types';

interface HomeStaticProps {
  videos: Video[];
  articles: Article[];
}

export default function Home(props: HomeStaticProps) {
  const { articles, videos } = props;

  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  const [about, openAbout, closeAbout] = useBoolean(false);
  const [contact, openContact, closeContact] = useBoolean(false);
  const [project, openProject, closeProject] = useBoolean(false);

  function renderProjectsList(project: Project): React.ReactNode {
    const { title, description, banner } = project;

    function onProjectClick(): void {
      setActiveProject(project);
      openProject();
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

  function renderVideoList(video: Video): React.ReactNode {
    return <Card.Video id={video.id} />;
  }

  return (
    <Layout>
      <div>
        <Header />
        <Banner onAbout={openAbout} onContact={openContact} />
      </div>

      <List
        title='Portfolio'
        description={`Projects I've worked on recently`}
        data={projects}
        renderList={renderProjectsList}
      />

      <Conditional condition={Boolean(config.articles)}>
        <List
          title='Articles'
          description={`When I'm not writing code, I write articles`}
          data={articles}
          renderList={renderArticlesList}
        />
      </Conditional>

      <Conditional condition={Boolean(config.videos)}>
        <List
          title='Videos'
          description={`I also make videos`}
          data={videos}
          renderList={renderVideoList}
        />
      </Conditional>

      <BottomSheet.About open={about} onDismiss={closeAbout} />

      <BottomSheet.Contact open={contact} onDismiss={closeContact} />

      <BottomSheet.ProjectDetails
        open={project}
        onDismiss={closeProject}
        project={activeProject}
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const articles = await API.getArticles();
  const videos = await API.getVideos();

  const props: HomeStaticProps = {
    articles,
    videos,
  };

  return { props };
}
