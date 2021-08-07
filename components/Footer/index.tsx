import { Layout } from 'antd';
import React from 'react';
import { SocialIcons } from './SocialIcons';

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

export * from './SocialIcons';
