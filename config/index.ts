import { contact, Contact } from './contact';
import { Project, projects } from './projects';

interface Config {
  contact: Contact;
  projects: Project[];
}

const config: Config = {
  contact,
  projects,
};

export const POSTS_PER_PAGE = 8;

export default config;
