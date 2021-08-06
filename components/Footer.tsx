import { Layout } from 'antd';
import React from 'react';
import { IconBaseProps } from 'react-icons';
import {
  FaLinkedinIn as LinkedinIcon
} from 'react-icons/fa';
import {
  IoLogoGithub as GithubIcon,
  IoLogoTwitter as TwitterIcon,
  IoMdMail as MailIcon
} from 'react-icons/io';
import { contact, ContactType } from '../config';
import { Maybe } from '../types';

export function Footer(): React.ReactElement {
  function renderSocialIcons(): React.ReactNode {
    function resolveIcon(entry: [string, string]): React.ReactNode {
      const [type, url] = entry;

      const props: IconBaseProps = {
        className: 'cursor-pointer text-2xl mr-4',
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
      )
    }

    return Object.entries(contact).map(resolveIcon)
  }

  return (
    <Layout.Footer className='flex flex-col text-center py-16 lg:py-10 font-light bg-primary'>
      <span className='text-xl font-bold'>Let&apos;s connect</span>
      <span className='my-8 font-light'>Get in touch for opportunities or just to say hi!</span>
      <div className='flex self-center'>
        {renderSocialIcons()}
      </div>
    </Layout.Footer>
  );
}
