import { contact, Contact } from './contact';
import { Course, courses } from './courses';
import { Project, projects } from './projects';

interface Config {
  contact: Contact;
  projects: Project[];
  courses: Course[];
}

const config: Config = {
  contact,
  projects,
  courses,
};

export const POSTS_PER_PAGE = 10;

export default config;
