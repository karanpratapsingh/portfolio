export type Maybe<T> = T | null;

export type Article = {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  publishedAt: string;
};

export type Video = {
  id: string;
};
