import projects, { IProject } from './projects';
import contact, { Contact } from './contact';

interface IConfig {
  name: string;
  intro: string;
  about: string;
  projects: IProject[];
  contact: Contact;
}

const Config: IConfig = {
  name: 'Karan',
  intro: 'A full stack developer who loves open source and values learning and growing with people, teams, and technologies.',
  about: 'I love to build well-structured, clean code and clean repositories with maintainable and scalable structure, functional programming. Besides, I like to write code in a high-paced and challenging environment with an emphasis on using best practices to develop high-quality software that meets project requirements, budget, and schedule. When working with me you can expect a professional, prompt and friendly service.',
  contact,
  projects
};

export * from './projects';
export * from './contact';
export default Config;