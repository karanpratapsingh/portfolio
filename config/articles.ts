export enum ArticleProvider {
  DEVTO = 'dev.to',
}

export type DevtoConfig = {
  provider: ArticleProvider.DEVTO;
  username: string;
  apiUrl: string;
};

export type Articles = DevtoConfig;

export const articles: DevtoConfig = {
  provider: ArticleProvider.DEVTO,
  username: 'karanpratapsingh',
  apiUrl: 'https://dev.to/api',
};
