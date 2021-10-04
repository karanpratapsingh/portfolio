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
  title: 'Software Engineer & Solutions Architect',
  about: `
    A software engineer who loves to collaborate and build well-structured, scalable applications.
    I’ve written code in high-paced and challenging environment with an emphasis on using best practices
    to develop high-quality software that meets project requirements, budget, and schedule. Also, I am an
    avid open source contributor who values learning and growing with people, teams, and technologies.
  `,
  resume:
    'https://drive.google.com/file/d/13ZAZlisvJ_F1Bo8q1e7KJDlkAAt6uNXZ/view?usp=sharing',
  available: false,
};
