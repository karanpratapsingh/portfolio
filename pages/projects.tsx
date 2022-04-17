import siteMetadata from '@/data/siteMetadata';
import config from '../config';
import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';
import { Header } from '@/components/Form';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getPlaiceholder, IGetPlaiceholderReturn } from 'plaiceholder';
import { projects } from 'config/projects';

export const getStaticProps: GetStaticProps<{
  banners: IGetPlaiceholderReturn[];
}> = async () => {
  const images = projects.map(({ banner }) => getPlaiceholder(banner));

  const banners = await Promise.all(images);

  return { props: { banners } };
};

export default function Projects({
  banners,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header
          title='Projects'
          subtitle={`Projects I've worked on recently`}
        />
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.projects.map(
              ({ id, slug, title, description, banner }, index) => (
                <Card
                  key={id}
                  title={title}
                  description={description}
                  banner={banners[index]}
                  href={`/project/${slug}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
