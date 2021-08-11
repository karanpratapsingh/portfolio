export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  links: Record<ContactType, string>;
};

export const contact: Contact = {
  twitter: '@karan__6864',
  site: 'karanpratapsingh.com',
  links: {
    github: 'https://github.com/karanpratapsingh',
    linkedin: 'https://linkedin.com/in/karanpratapsingh4999',
    twitter: 'https://twitter.com/karan_6864',
    email: 'mailto:contact@karanpratapsingh.com',
  },
};
