import axios, { AxiosRequestConfig } from 'axios';
import env from 'env-var';
import config from '../config';
import { Article, Video } from '../types';

export async function getArticles(): Promise<Article[]> {
  const showArticles = Boolean(config.articles);
  const articles: Article[] = [];

  if (!showArticles) {
    return articles;
  }

  try {
    const url: string = `${config.articles?.apiUrl}/articles`;
    const request: AxiosRequestConfig = {
      params: {
        username: config.articles?.username,
      },
    };

    const { data } = await axios.get(url, request);

    data.forEach((data: any) => {
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
  } catch (error) {
    console.log(error);
  }

  return articles;
}

export async function getVideos(): Promise<Video[]> {
  const showVideos = Boolean(config.videos);
  const videos: Video[] = [];

  if (!showVideos) {
    return videos;
  }

  const key: string = env.get('NEXT_APP_YOUTUBE_API_KEY').required().asString();
  const channelId: string = env
    .get('NEXT_APP_YOUTUBE_CHANNEL_ID')
    .required()
    .asString();

  try {
    const url: string = `${config.videos?.apiUrl}/search`;
    const request: AxiosRequestConfig = {
      params: {
        key,
        channelId,
        order: 'date',
        maxResults: 20,
      },
    };

    const { data } = await axios.get(url, request);

    data.items.forEach((item: any) => {
      const {
        id: { kind, videoId: id },
      } = item;
      if (kind === 'youtube#video') {
        const video: Video = {
          id,
        };
        videos.push(video);
      }
    });
  } catch (error) {
    console.log(error);
  }

  return videos;
}
