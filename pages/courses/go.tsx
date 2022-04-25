import { POSTS_PER_PAGE } from 'config';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ComponentProps } from 'react';
import { PageSEO } from '../../components/SEO';
import siteMetadata from '../../data/siteMetadata';
import CourseListLayout from '../../layouts/CourseListLayout';
import { getAllFilesFrontMatter } from '../../lib/mdx';

export const getStaticProps: GetStaticProps<{
  courses: ComponentProps<typeof CourseListLayout>['courses'];
  initialDisplayPosts: ComponentProps<
    typeof CourseListLayout
  >['initialDisplayPosts'];
  pagination: ComponentProps<typeof CourseListLayout>['pagination'];
}> = async () => {
  const courses = (await getAllFilesFrontMatter('courses')).filter(course =>
    course.slug.includes('go'),
  );

  const initialDisplayPosts = courses.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(courses.length / POSTS_PER_PAGE),
  };

  return { props: { initialDisplayPosts, courses, pagination } };
};

export default function Blog({
  courses,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title='Go course' description={siteMetadata.description} />
      <CourseListLayout
        courses={courses}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title='Courses'
      />
    </>
  );
}
