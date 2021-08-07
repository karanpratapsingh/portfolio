import { Layout } from 'antd';
import React from 'react';
import { IconBaseProps } from 'react-icons';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import {
  IoLogoGithub as GithubIcon,
  IoLogoTwitter as TwitterIcon,
  IoMdMail as MailIcon,
} from 'react-icons/io';
import { contact, ContactType } from '../config';
import { Maybe } from '../types';

export function Footer(): React.ReactElement {
  return (
    <Layout.Footer className='flex flex-col text-center py-10 lg:py-16 font-light bg-primary dark:bg-purple-500 dark:text-white'>
      <span className='text-xl font-bold'>Let&apos;s connect</span>
      <span className='mt-4 lg:mt-8 lg:mb-6 font-light'>
        Get in touch for opportunities or just to say hi!
      </span>
      <SocialIcons />
    </Layout.Footer>
  );
}

export function SocialIcons(): React.ReactElement {
  return (
    <div className='flex self-center mt-2'>
      {React.Children.toArray(Object.entries(contact).map(resolveIcon))}
    </div>
  );
}

function resolveIcon(entry: [string, string]): React.ReactNode {
  const [type, url] = entry;

  const props: IconBaseProps = {
    className: 'cursor-pointer text-2xl mr-4 dark:text-white',
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
