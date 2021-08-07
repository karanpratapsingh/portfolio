export type DevtoConfig = {
  provider: 'dev.to';
  username: string;
  apiUrl: string;
};

export type Articles = DevtoConfig;

export const articles: DevtoConfig = {
  provider: 'dev.to',
  username: 'karanpratapsingh',
  apiUrl: 'https://dev.to/api',
};
