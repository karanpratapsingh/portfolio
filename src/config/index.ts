interface IConfig {
  name: string;
  intro: string;
  about: string;
  projects: IProject[];
}

export interface IProject {
  title: string;
  banner: string;
}

const projects: IProject[] = [
  { title: 'Project A', banner: 'https://images.unsplash.com/photo-1601666703585-964591b026c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' },
  { title: 'Project B', banner: 'https://images.unsplash.com/photo-1601666621148-7100d0f63ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80' },
  { title: 'Project C', banner: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' },
  { title: 'Project D', banner: 'https://images.unsplash.com/photo-1601664023050-82d1e19d945c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' },
  { title: 'Project E', banner: 'https://images.unsplash.com/photo-1601658797866-7ae55d05a817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
  { title: 'Project F', banner: 'https://images.unsplash.com/photo-1601658480525-0d3cf704ca48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' },
  { title: 'Project G', banner: 'https://images.unsplash.com/photo-1601648904883-4270e74277d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' },
];

const Config: IConfig = {
  name: 'Karan',
  intro: 'A full stack developer who loves open source and values learning and growing with people, teams, and technologies.',
  about: '',
  projects
};

export default Config;