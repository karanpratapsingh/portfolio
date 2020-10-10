import projects, { IProject } from './projects';
import contact, { Contact } from './contact';

interface IConfig {
  name: string;
  intro: string;
  about: string;
  resume: string;
  contact: Contact;
  projects: IProject[];
}

const Config: IConfig = {
  name: 'Karan',
  intro: 'A full stack developer who loves open source and values learning and growing with people, teams, and technologies.',
  about: 'A software engineer who loves to collaborate and build well-structured, scalable applications. I’ve written code in high-paced and challenging environment with an emphasis on using best practices to develop high-quality software that meets project requirements, budget, and schedule. Also, an avid open source contributor who values learning and growing with people, teams, and technologies.',
  resume: 'https://drive.google.com/file/d/1f8R2yyvc6G-zGNJaW8l5TBC5Cfgipo3u/view?usp=sharing',
  contact,
  projects
};

export * from './projects';
export * from './contact';
export default Config;