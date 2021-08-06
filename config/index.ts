import contact, { Contact } from './contact';
import projects, { Project } from './projects';

type PersonalConfig = {
  name: string;
  fullName: string;
  intro: string;
  about: string;
  resume: string;
  contact: Contact;
  available: boolean;
};

type ArticleProvider = 'dev.to';

type ArticlesConfig = {
  provider: ArticleProvider;
  username: string;
  apiUrl: string;
};

type VideosProvider = 'youtube.com';

type VideosConfig = {
  provider: VideosProvider;
  apiUrl: string;
};

interface Config {
  personal: PersonalConfig;
  articles?: ArticlesConfig;
  videos?: VideosConfig;
  projects: Project[];
}

const config: Config = {
  personal: {
    name: 'Karan',
    fullName: 'Karan Pratap Singh',
    intro:
      'A full stack developer who loves open source and values learning and growing with people, teams, and technologies.',
    about:
      'A software engineer who loves to collaborate and build well-structured, scalable applications. I’ve written code in high-paced and challenging environment with an emphasis on using best practices to develop high-quality software that meets project requirements, budget, and schedule. Also, an avid open source contributor who values learning and growing with people, teams, and technologies.',
    resume:
      'https://drive.google.com/file/d/1f8R2yyvc6G-zGNJaW8l5TBC5Cfgipo3u/view?usp=sharing',
    available: false,
    contact,
  },
  projects,
  articles: {
    provider: 'dev.to',
    username: 'karanpratapsingh',
    apiUrl: 'https://dev.to/api',
  },
  videos: {
    provider: 'youtube.com',
    apiUrl: 'https://www.googleapis.com/youtube/v3',
  },
};

export default config;

export * from './projects';
export * from './contact';
export * from './stack';
