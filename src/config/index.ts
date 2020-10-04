import projects, { IProject } from './projects';

interface IConfig {
  name: string;
  intro: string;
  about: string;
  projects: IProject[];
}

const Config: IConfig = {
  name: 'Karan',
  intro: 'A full stack developer who loves open source and values learning and growing with people, teams, and technologies.',
  about: '',
  projects
};

export * from './projects';
export default Config;