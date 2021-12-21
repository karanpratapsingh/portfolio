export interface Personal {
  name: string;
  fullName: string;
  title: string;
  about: string;
  resume: string;
  available: boolean;
}

export const personal: Personal = {
  name: 'Karan',
  fullName: 'Karan Pratap Singh',
  title: 'Senior Software Engineer',
  about: `
    A software engineer who values learning and growing with people, teams, and technologies. Experienced at writing 
    code in a high-paced environment with an emphasis on using best practices to develop high-quality software that satisfies 
    project requirements, budget, and schedule.
 `,
  resume:
    'https://drive.google.com/file/d/1jZ8AMZwfndWcLvhi1KMcJ1-bhZjEg1CZ/view?usp=sharing',
  available: false,
};
