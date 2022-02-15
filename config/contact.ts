export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
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
    youtube: 'https://www.youtube.com/c/KaranPratapSingh',
    email: 'mailto:contact@karanpratapsingh.com',
    buymeacoffee: 'https://www.buymeacoffee.com/karanps',
  },
};
