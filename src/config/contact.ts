export enum ContactType {
  email = 'email',
  twitter = 'twitter',
  linkedIn = 'linkedIn',
  github = 'github'
}

export type Contact = { [key in ContactType]: string; };

const contact = {
  email: 'contact@karanpratapsingh.com',
  twitter: 'twitter.com/karan_6864',
  linkedIn: 'linkedin.com/in/karanpratapsingh4999',
  github: 'github.com/karanpratapsingh',
};

export default contact;

