interface IConfig {
  name: string;
  intro: string;
  about: string;
  portfolio: unknown[]
}

const Config: IConfig = {
  name: 'Karan',
  intro: 'A full stack developer who loves open source and values learning and growing with people, teams, and technologies.',
  about: '',
  portfolio: []
};

export default Config;