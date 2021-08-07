export type YouTubeConfig = {
  provider: 'youtube.com';
  apiUrl: string;
};

export type Videos = YouTubeConfig;

export const videos: YouTubeConfig = {
  provider: 'youtube.com',
  apiUrl: 'https://www.googleapis.com/youtube/v3',
};
