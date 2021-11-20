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
    'https://docs.google.com/document/d/1eZwkRliradI4IBSrFUzhhhfURpff045Q/edit?usp=sharing&ouid=103878119262981722477&rtpof=true&sd=true',
  available: false,
};
