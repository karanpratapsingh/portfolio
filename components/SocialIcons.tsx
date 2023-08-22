import clsx from 'clsx';
import { Colors } from 'config/colors';
import { contact, ContactType } from 'config/contact';
import React, { memo } from 'react';
import { IconBaseProps } from 'react-icons';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import {
  IoLogoGithub as GithubIcon,
  IoLogoTwitter as TwitterIcon,
} from 'react-icons/io';
import {
  SiBuymeacoffee as BuymeacoffeeIcon,
  SiGmail as MailIcon,
  SiYoutube as YoutubeIcon,
  SiGooglescholar as Googlescholar,
} from 'react-icons/si';
import { Maybe, Tuple } from 'types';

interface SocialIconsProps {
  className?: string;
}

function SocialIcons(props: SocialIconsProps): React.ReactElement {
  const { className } = props;

  return (
    <div className={clsx('mt-2 flex', className)}>
      {React.Children.toArray(Object.entries(contact.links).map(resolveIcon))}
    </div>
  );
}

function resolveIcon(entry: Tuple<string>): React.ReactNode {
  const [type, url] = entry;

  const props: IconBaseProps = {
    className: 'icon cursor-pointer text-2xl mr-6',
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

    case ContactType.youtube:
      icon = <YoutubeIcon {...props} />;
      break;

    case ContactType.email:
      icon = <MailIcon {...props} />;
      break;

    case ContactType.buymeacoffee:
      icon = <BuymeacoffeeIcon {...props} />;
      break;
    case ContactType.googlescholar:
      icon = <Googlescholar {...props} />;
      break;
    default:
      break;
  }

  return (
    <a
      className='social-icons'
      href={url}
      aria-label={type}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </a>
  );
}

export default memo(SocialIcons);
