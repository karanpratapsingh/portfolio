export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
}

export const courses: Course[] = [
  {
    title: `Let's learn Go`,
    slug: 'go',
    banner: '/static/courses/go/banner.png',
    description: `Let's master the fundamentals and advanced features of the Go programming language`,
  },
];
