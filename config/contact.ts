export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
}

export type Contact = Record<ContactType, string>;

export const contact: Contact = {
  github: 'https://github.com/karanpratapsingh',
  linkedin: 'https://linkedin.com/in/karanpratapsingh4999',
  twitter: 'https://twitter.com/karan_6864',
  email: 'mailto:contact@karanpratapsingh.com',
};
