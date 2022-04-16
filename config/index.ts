import { personal, Personal } from './personal';
import { contact, Contact } from './contact';
import { projects, Project } from './projects';

// TODO: migrate config to mdx
interface Config {
  personal: Personal;
  contact: Contact;
  projects: Project[];
}

const config: Config = {
  personal,
  contact,
  projects,
};

export default config;
