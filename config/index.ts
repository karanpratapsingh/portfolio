import { personal, Personal } from './personal';
import { contact, Contact } from './contact';
import { projects, Project } from './projects';
import { articles, Articles } from './articles';
import { videos, Videos } from './videos';
import { analytics, Analytics } from './analytics';

interface Config {
  personal: Personal;
  contact: Contact;
  projects: Project[];
  articles?: Articles;
  videos?: Videos;
  analytics?: Analytics;
}

const config: Config = {
  personal,
  contact,
  projects,
  articles,
  videos,
  analytics,
};

export default config;
