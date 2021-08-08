export type Env =
  | 'NEXT_PUBLIC_GOOGLE_ANALYTICS_ID'
  | 'YOUTUBE_API_KEY'
  | 'YOUTUBE_CHANNEL_ID';

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

export type EntryTuple = [string, string];
