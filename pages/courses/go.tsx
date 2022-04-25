import CourseContent from '@/components/CourseContent';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';

const SLUG = 'go';

export default function Go() {
  return (
    <>
      <PageSEO title='Go course' description={siteMetadata.description} />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Go Course' />
        <CourseContent courseSlug={SLUG} />
      </div>
    </>
  );
}
