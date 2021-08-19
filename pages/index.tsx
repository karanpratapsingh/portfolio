import * as API from 'api';
import config, { Project, projects } from 'config';
import useBoolean from 'hooks/useBoolean';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Article, Video } from 'types';

interface HomeStaticProps {
  videos: Video[];
  articles: Article[];
}

const Banner = dynamic(import('../components/Banner'));
const Conditional = dynamic(import('../components/Conditional'));
const Header = dynamic(import('../components/Header'));
const Layout = dynamic(import('../components/Layout'));

const ProjectList = dynamic(import('../components/List/Project'));
const ArticleList = dynamic(import('../components/List/Article'));
const VideoList = dynamic(import('../components/List/Video'));

const AboutBottomSheet = dynamic(import('../components/BottomSheet/About'));
const ContactBottomSheet = dynamic(import('../components/BottomSheet/Contact'));
const ProjectBottomSheet = dynamic(import('../components/BottomSheet/Project'));

function Home(props: HomeStaticProps): React.ReactElement {
  const { articles, videos } = props;

  const [initialProject] = projects;
  const [activeProject, setActiveProject] = useState<Project>(initialProject);

  const [about, openAbout, closeAbout] = useBoolean(false);
  const [contact, openContact, closeContact] = useBoolean(false);
  const [project, openProject, closeProject] = useBoolean(false);

  function onProject(project: Project): void {
    setActiveProject(project);
    openProject();
  }

  return (
    <Layout>
      <Header />
      <Banner onAbout={openAbout} onContact={openContact} />

      <ProjectList
        title='Portfolio'
        description={`Projects I've worked on recently`}
        projects={projects}
        onProject={onProject}
      />

      <Conditional condition={config.articles}>
        <ArticleList
          title='Articles'
          description={`When I'm not writing code, I write articles`}
          articles={articles}
        />
      </Conditional>

      <Conditional condition={config.videos}>
        <VideoList
          title='Videos'
          description='I also make videos'
          videos={videos}
        />
      </Conditional>

      <AboutBottomSheet open={about} onDismiss={closeAbout} />
      <ContactBottomSheet open={contact} onDismiss={closeContact} />
      <ProjectBottomSheet
        open={project}
        onDismiss={closeProject}
        project={activeProject}
      />
    </Layout>
  );
}

export default Home;

export async function getServerSideProps() {
  const articles = await API.getArticles();
  const videos = await API.getVideos();

  const props: HomeStaticProps = {
    articles,
    videos,
  };

  return { props };
}
