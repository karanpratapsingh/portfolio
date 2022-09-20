import Draft from '@/components/Draft';
import { MDXLayoutRenderer } from '@/components/MDXComponents';
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@/lib/mdx';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import { CourseFrontMatter } from 'types/CourseFrontMatter';
import { Toc } from 'types/Toc';

const DEFAULT_LAYOUT = 'CourseLayout';

export async function getStaticPaths() {
  const courses = getFiles('courses');

  return {
    paths: courses.map(course => ({
      params: {
        slug: formatSlug(course).split('/'),
      },
    })),
    fallback: false,
  };
}

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  course: { mdxSource: string; toc: Toc; frontMatter: CourseFrontMatter };
  authorDetails: AuthorFrontMatter[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}> = async ({ params }) => {
  const slug = (params.slug as string[]).join('/');
  const allCourses = await getAllFilesFrontMatter('courses');

  const courseIndex = allCourses.findIndex(
    course => formatSlug(course.slug) === slug,
  );
  let prev: { slug: string; title: string } =
    allCourses[courseIndex + 1] || null;
  let next: { slug: string; title: string } =
    allCourses[courseIndex - 1] || null;
  const course = await getFileBySlug<CourseFrontMatter>('courses', slug);
  // @ts-ignore
  const authorList = course.frontMatter.authors || ['default'];
  const authorPromise = authorList.map(async author => {
    const authorResults = await getFileBySlug<AuthorFrontMatter>('authors', [
      author,
    ]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  if (prev && prev.slug.includes('references')) {
    prev = null;
  }

  if (next && next.slug.includes('welcome-to-the-course')) {
    next = null;
  }

  return {
    props: {
      course,
      authorDetails,
      prev,
      next,
    },
  };
};

export default function Course({
  course,
  authorDetails,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, toc, frontMatter } = course;

  return (
    <>
      {'draft' in frontMatter && frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <Draft />
      )}
    </>
  );
}
