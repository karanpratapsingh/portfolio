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
    Diligent software engineer who values learning and growing with people, teams, and technologies. Experienced at writing 
    code in a high-paced environment with an emphasis on using best practices to develop high-quality software that satisfies 
    project requirements, budget, and schedule.
 `,
  resume:
    'https://drive.google.com/file/d/13ZAZlisvJ_F1Bo8q1e7KJDlkAAt6uNXZ/view?usp=sharing',
  available: false,
};
