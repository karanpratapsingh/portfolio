import Conditional from '@/components/Conditional';
import Link from '@/components/Link';
import config from 'config';
import type { Course, CourseContent } from 'config/courses';
import React from 'react';

interface CourseContentProps {
  courseSlug: string;
}

function getCourse(slug: string): Course {
  return config.courses.find(course => course.slug === slug);
}

function getSlug(course: string, slug: string): string {
  return `/courses/${course}/${slug}`;
}

export default function CourseContent(
  props: CourseContentProps,
): React.ReactElement {
  const { courseSlug } = props;

  function renderCourseList(item: CourseContent): React.ReactNode {
    const { name, slug, content } = item;

    return (
      <div key={item.name} className='flex'>
        <ul className='mb-4 text-lg font-bold'>
          {slug ? (
            <Link key={slug} href={getSlug(courseSlug, slug)}>
              <h1 className='mb-4 text-2xl font-bold'>{name}</h1>
            </Link>
          ) : (
            <h1 className='mb-4 text-2xl font-bold'>{name}</h1>
          )}
          <Conditional condition={!!content}>
            {content?.map(({ name, slug }) => (
              <Link key={name} href={getSlug(courseSlug, slug)}>
                <h3 className='mb-1 text-lg font-normal text-gray-500 dark:text-gray-400'>
                  {name}
                </h3>
              </Link>
            ))}
          </Conditional>
        </ul>
      </div>
    );
  }

  const { content } = getCourse(courseSlug);

  return (
    <div className='pt-12'>
      {React.Children.toArray(content.map(renderCourseList))}
    </div>
  );
}
