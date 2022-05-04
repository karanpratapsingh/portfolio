import Conditional from '@/components/Conditional';
import { H1, H2, H3 } from '@/components/Form';
import DeploymentList from '@/components/list/DeploymentList';
import StackList from '@/components/list/StackList';
import { PageSEO } from '@/components/SEO';
import config from 'config';
import type { Project, SubProject } from 'config/projects';
import { defaultDimensions } from 'config/projects';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import React, { useCallback } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

const { projects } = config;

export async function getStaticPaths() {
  return {
    paths: projects.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  project: Project;
}> = async ({ params }) => {
  const project = projects.find(project => project.slug === params.slug);

  return {
    props: {
      project,
    },
  };
};

export default function Project({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    title,
    description,
    shortDescription,
    banner,
    dimensions,
    stack,
    deployment,
    screenshots,
    subProjects,
  } = project;

  const [height, width] = dimensions ?? defaultDimensions;

  const renderScreenShotList = useCallback(
    (screenshot: string) => {
      const style: React.CSSProperties = {
        height,
        width,
      };

      return (
        <div
          className='mr-2 flex-shrink-0 overflow-hidden rounded bg-placeholder-light dark:bg-placeholder-dark'
          style={style}
        >
          <Image
            loading='eager'
            src={screenshot}
            height={height}
            width={width}
            objectFit='cover'
            alt=''
          />
        </div>
      );
    },
    [height, width],
  );

  const renderSubProjectList = useCallback(
    ({ title, deployment, description }: SubProject) => (
      <>
        <H3>{title}</H3>
        <Conditional condition={!!deployment}>
          <DeploymentList deployment={deployment} />
        </Conditional>
        <p className='mt-2 mb-4 font-light'>{description}</p>
      </>
    ),
    [],
  );

  const hasDeployments = !!deployment;
  const hasScreenshots = !!screenshots.length;
  const hasSubProjects = !!subProjects.length;

  return (
    <>
      <PageSEO
        title={title}
        description={shortDescription || description}
        imageUrl={banner}
      />
      <H1 className='lg:text-5x mb-4 text-3xl font-bold dark:text-white'>
        {title}
      </H1>
      <p className='mb-4 font-light'>{description}</p>

      <H2>Stack</H2>
      <StackList stack={stack} />

      <Conditional condition={hasDeployments}>
        <H2>Deployments</H2>
        <DeploymentList deployment={deployment} />
      </Conditional>

      <Conditional condition={hasScreenshots}>
        <H2 className='my-4'>Screenshots</H2>
        <ScrollContainer
          className='list mt-4 mb-1 flex overflow-auto'
          hideScrollbars={false}
        >
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </ScrollContainer>
      </Conditional>

      <Conditional condition={hasSubProjects}>
        <H2 className='mt-4'>More Products</H2>
        <p className='mt-1 mb-4 font-light'>Some additional products</p>
        {React.Children.toArray(subProjects.map(renderSubProjectList))}
      </Conditional>
    </>
  );
}
