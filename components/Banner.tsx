/* eslint-disable @next/next/no-html-link-for-pages */
import { useRandomColorPair } from '@/lib/hooks/useRandomColor';
import config from 'config';
import { memo } from 'react';
import { RoughNotation } from 'react-rough-notation';

const { personal } = config;

function Banner(): React.ReactElement {
  const [aboutColor, contactColor] = useRandomColorPair();

  return (
    <div className='fade-in banner flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-10'>
      <h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
        Hi, I am {personal.name}
      </h1>
      <p className='my-2 text-lg font-light lg:my-4 lg:text-2xl'>
        {personal.title}
      </p>
      <p className='font-light lg:text-xl'>
        Read more
        <a className='ml-2 mr-2 font-normal text-black' href='/about'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={aboutColor}
          >
            about me
          </RoughNotation>
        </a>
        or
        <a className='ml-2 font-normal text-black' href='/contact'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={contactColor}
          >
            contact me
          </RoughNotation>
        </a>
      </p>
    </div>
  );
}

export default memo(Banner);
