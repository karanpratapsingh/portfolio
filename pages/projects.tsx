import siteMetadata from '@/data/siteMetadata';
import config from '../config';
import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';
import { Header } from '@/components/Form';

export default function Projects() {
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
            {config.projects.map(({ id, slug, title, description, banner }) => (
              <Card
                key={id}
                title={title}
                description={description}
                banner={banner}
                href={`/project/${slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
