import { personal, Personal } from './personal';
import { contact, Contact } from './contact';
import { projects, Project } from './projects';
import { articles, Articles } from './articles';
import { videos, Videos } from './videos';

interface Config {
  personal: Personal;
  contact: Contact;
  projects: Project[];
  articles?: Articles;
  videos?: Videos;
}

const config: Config = {
  personal,
  contact,
  projects,
  articles,
  videos,
};

export default config;

export * from './personal';
export * from './contact';
export * from './projects';
export * from './articles';
export * from './videos';
export * from './stack';
