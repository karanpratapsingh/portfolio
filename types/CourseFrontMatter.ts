export type CourseFrontMatter = {
  title: string;
  date: string;
  lastmod?: string;
  draft?: boolean;
  summary?: string;
  images?: string[];
  authors?: string[];
  layout?: string;
  readingTime: any;
  canonicalUrl?: string;
  slug: string;
  fileName: string;
};
