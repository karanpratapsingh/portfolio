import React, { useState } from 'react';
import * as API from '../api';
import {
  Banner,
  BottomSheet,
  Conditional,
  Header,
  Layout,
  List,
} from '../components';
import config, { Project, projects } from '../config';
import { useBoolean } from '../hooks';
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

  function onProject(project: Project): void {
    setActiveProject(project);
    openProject();
  }

  return (
    <Layout>
      <div>
        <Header />
        <Banner onAbout={openAbout} onContact={openContact} />
      </div>

      <List.Project
        title='Portfolio'
        description={`Projects I've worked on recently`}
        projects={projects}
        onProject={onProject}
      />

      <Conditional condition={config.articles}>
        <List.Article
          title='Articles'
          description={`When I'm not writing code, I write articles`}
          articles={articles}
        />
      </Conditional>

      <Conditional condition={config.videos}>
        <List.Video
          title='Videos'
          description={`I also make videos`}
          videos={videos}
        />
      </Conditional>

      <BottomSheet.About open={about} onDismiss={closeAbout} />
      <BottomSheet.Contact open={contact} onDismiss={closeContact} />
      <BottomSheet.Project
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
