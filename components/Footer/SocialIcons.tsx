import React from 'react';
import { IconBaseProps } from 'react-icons';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import {
  IoLogoGithub as GithubIcon,
  IoLogoTwitter as TwitterIcon
} from 'react-icons/io';
import { SiGmail as MailIcon } from 'react-icons/si';
import { Colors, contact, ContactType } from '../../config';
import { Maybe } from '../../types';

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
    className: 'cursor-pointer text-2xl mr-4',
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
