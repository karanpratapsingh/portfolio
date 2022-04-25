import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { POSTS_PER_PAGE } from 'config';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { PostFrontMatter } from 'types/PostFrontMatter';

export const getStaticPaths: GetStaticPaths<{ page: string }> = async () => {
  const totalPCourse = await getAllFilesFrontMatter('courses');
  const totalPages = Math.ceil(totalPCourse.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  courses: PostFrontMatter[];
  initialDisplayPosts: PostFrontMatter[];
  pagination: { currentPage: number; totalPages: number };
}> = async context => {
  const {
    params: { page },
  } = context;
  const courses = await getAllFilesFrontMatter('courses');
  const pageNumber = parseInt(page as string);
  const initialDisplayPosts = courses.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber,
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(courses.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      courses,
      initialDisplayPosts,
      pagination,
    },
  };
};

export default function PostPage({
  courses,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <ListLayout
        posts={courses}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title='All Posts'
      />
    </>
  );
}
