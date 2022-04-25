import Conditional from '@/components/Conditional';
import Link from '@/components/Link';
import { Collapse } from '@geist-ui/core';
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

  function renderCourseList(
    item: CourseContent,
    index: number,
  ): React.ReactNode {
    const { name, description, content } = item;

    return (
      <Collapse
        key={name}
        className='!border-0'
        title={name}
        subtitle={description}
        initialVisible={!index}
      >
        <Conditional condition={!!content}>
          {content?.map(({ name, slug }) => (
            <Link key={name} href={getSlug(courseSlug, slug)}>
              <h3 className='mb-1 text-lg font-normal text-gray-500 dark:text-gray-400'>
                {name}
              </h3>
            </Link>
          ))}
        </Conditional>
      </Collapse>
    );
  }

  const { content } = getCourse(courseSlug);

  return (
    <div className='pt-12'>
      <Collapse.Group>
        {React.Children.toArray(content.map(renderCourseList))}
      </Collapse.Group>
    </div>
  );
}
