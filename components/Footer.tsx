import { Layout } from 'antd';
import React from 'react';
import { IconBaseProps } from 'react-icons';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import {
  IoLogoGithub as GithubIcon,
  IoLogoTwitter as TwitterIcon,
} from 'react-icons/io';
import { SiGmail as MailIcon } from 'react-icons/si';
import { Colors, contact, ContactType } from '../config';
import { Maybe } from '../types';

export function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <Layout.Footer className='flex flex-col items-center py-10 lg:py-12 font-light bg-primary'>
      <span className='text-xl font-bold'>Let&apos;s connect</span>
      <span className='mt-4 mb-2 lg:text-base lg:mt-6 lg:mb-4 font-light'>
        Get in touch for opportunities or to say hi!
      </span>
      <SocialIcons />
      <span className='mt-12 lg:mt-16 text-xs font-light'>
        &copy; {year} Karan Pratap Singh
      </span>
    </Layout.Footer>
  );
}

export function SocialIcons(): React.ReactElement {
  return (
    <div className='flex mt-2'>
      {React.Children.toArray(Object.entries(contact).map(resolveIcon))}
    </div>
  );
}

function resolveIcon(entry: [string, string]): React.ReactNode {
  const [type, url] = entry;

  const props: IconBaseProps = {
    className: 'cursor-pointer text-2xl mr-4 dark:text-white',
    color: Colors[type],
  };

  let icon: Maybe<React.ReactNode> = null;

  switch (type) {
    case ContactType.linkedin:
      icon = <LinkedinIcon {...props} />;
      break;

    case ContactType.twitter:
      icon = <TwitterIcon {...props} />;
      break;

    case ContactType.github:
      icon = <GithubIcon {...props} />;
      break;

    case ContactType.email:
      icon = <MailIcon {...props} />;
      break;
    default:
      break;
  }

  return (
    <a target='_blank' href={url} rel='noopener noreferrer'>
      {icon}
    </a>
  );
}
