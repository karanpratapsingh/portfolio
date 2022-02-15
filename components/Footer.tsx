import { Layout } from 'antd';
import React, { memo } from 'react';
import SocialIcons from './SocialIcons';

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <Layout.Footer className='flex flex-col items-center mt-4 py-10 lg:py-12 font-light bg-primary dark:bg-primary-dark dark:text-white'>
      <span className='text-xl font-bold'>Let&apos;s connect</span>
      <span className='mt-2 mb-2 lg:text-base lg:mb-4 font-light'>
        Get in touch for opportunities or to say hi!
      </span>
      <SocialIcons />
      <span className='mt-12 lg:mt-16 text-xs font-light'>
        &copy; {year} Karan Pratap Singh
      </span>
    </Layout.Footer>
  );
}

export default memo(Footer);
