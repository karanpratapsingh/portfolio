import Conditional from '@/components/Conditional';
import Link from '@/components/Link';
import { Collapse } from '@geist-ui/core';
import type { Course, CourseContent } from 'config/courses';
import React from 'react';
import { BsDot as DotIcon } from 'react-icons/bs';

interface CourseContentProps {
  course: Course;
}

function getSlug(course: string, slug: string): string {
  return `/courses/${course}/${slug}`;
}

export default function CourseContent(
  props: CourseContentProps,
): React.ReactElement {
  const { course } = props;
  const { content } = course;

  function renderCourseList(item: CourseContent): React.ReactNode {
    const { name, description, content } = item;

    // As title does not support React.ReactNode
    const title: any = (
      <span className='font-bold dark:text-white'>{name}</span>
    );

    return (
      <Collapse
        key={name}
        className='!border-0'
        title={title}
        subtitle={description}
      >
        <Conditional condition={!!content}>
          {content?.map(({ name, slug }) => (
            <Link key={name} href={getSlug(course.slug, slug)}>
              <h3 className='my-1 ml-2 flex items-center text-lg text-gray-500 dark:text-gray-400'>
                <DotIcon className='text-4xl' /> {name}
              </h3>
            </Link>
          ))}
        </Conditional>
      </Collapse>
    );
  }

  return (
    <div className='pt-4 md:pt-8 xl:pt-12'>
      <Collapse.Group>
        {React.Children.toArray(content.map(renderCourseList))}
      </Collapse.Group>
    </div>
  );
}
