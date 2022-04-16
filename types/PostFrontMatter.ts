export type PostFrontMatter = {
  title: string;
  date: string;
  tags: string[];
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
