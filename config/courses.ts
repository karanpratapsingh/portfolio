export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
}

export const courses: Course[] = [
  {
    title: 'Go course',
    slug: 'go',
    banner: '/static/courses/go/banner.png',
    description: 'Learn about Go',
  },
];
