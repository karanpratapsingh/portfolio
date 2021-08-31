export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@karan__6864',
  site: 'karanpratapsingh.com',
  links: {
    github: 'https://github.com/karanpratapsingh',
    linkedin: 'https://linkedin.com/in/karan99',
    twitter: 'https://twitter.com/karan_6864',
    youtube: 'https://www.youtube.com/channel/UCgAb7MfWecaeUu-Nsl1J6jg',
    email: 'mailto:contact@karanpratapsingh.com',
  },
};
