export enum VideoProvider {
  YOUTUBE = 'youtube.com',
}

export type YouTubeConfig = {
  provider: VideoProvider.YOUTUBE;
  apiUrl: string;
};

export type Videos = YouTubeConfig;

export const videos: Videos = {
  provider: VideoProvider.YOUTUBE,
  apiUrl: 'https://www.googleapis.com/youtube/v3',
};
