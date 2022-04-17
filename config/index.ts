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

export default config;
