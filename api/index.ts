import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../config';
import staticResponse from '../config/static.json';
import { Article, Video } from '../types';
import { async, getEnv, parseYouTubeResponse } from '../utils';

export async function getArticles(): Promise<Article[]> {
  const showArticles = Boolean(config.articles);
  const articles: Article[] = [];

  if (!showArticles) {
    return articles;
  }

  const url: string = `${config.articles?.apiUrl}/articles`;
  const request: AxiosRequestConfig = {
    params: {
      username: config.articles?.username,
    },
  };

  const [response, error] = await async<AxiosResponse, AxiosError>(
    axios.get(url, request),
  );

  if (error) {
    const message = error?.response?.data?.error?.message;
    console.log(message);
    return articles;
  }

  response?.data.forEach((data: any) => {
    const {
      id,
      title,
      description,
      tag_list: tags,
      published_at: publishedAt,
      url,
    } = data;

    const article: Article = {
      id,
      title,
      description,
      url,
      tags,
      publishedAt,
    };
    articles.push(article);
  });

  return articles;
}

export async function getVideos(): Promise<Video[]> {
  const showVideos = Boolean(config.videos);
  const videos: Video[] = [];

  if (!showVideos) {
    return videos;
  }

  const key = getEnv('YOUTUBE_API_KEY', true);
  const channelId = getEnv('YOUTUBE_CHANNEL_ID', true);

  const url: string = `${config.videos?.apiUrl}/search`;
  const request: AxiosRequestConfig = {
    params: {
      key,
      channelId,
      order: 'date',
      maxResults: 20,
    },
  };

  const [response, error] = await async<AxiosResponse, AxiosError>(
    axios.get(url, request),
  );

  if (error) {
    const message = error?.response?.data?.error?.message;
    console.error(message);
    // Serve static video response if YT API quota exceeds
    staticResponse.videos.forEach(({ id }: any) => videos.push({ id }));
    return videos;
  }

  response?.data?.items?.forEach((item: any) =>
    parseYouTubeResponse(item, (id: string) => {
      videos.push({ id });
    }),
  );

  return videos;
}
