import { useMemo } from 'react';
import config from '../../config';
import { getRandomColorPair } from '../../util';
import { ColorText } from './ColorText';

const { personal } = config;

interface BannerProps {
  onAbout: () => void;
  onContact: () => void;
}

export function Banner(props: BannerProps): React.ReactElement {
  const { onAbout, onContact } = props;
  const [aboutColor, contactColor]: string[] = useMemo(getRandomColorPair, []);

  return (
    <div className='banner flex flex-col flex-1 justify-center px-6 lg:px-10 py-10 dark:text-white'>
      <h1 className='text-3xl lg:text-5xl font-bold dark:text-white'>
        Hi, I am {personal.name}
      </h1>
      <p className='my-2 text-lg lg:my-4 lg:text-2xl font-light'>
        {personal.title}
      </p>
      <p className='lg:text-xl font-light'>
        Read more
        <ColorText
          text='about me'
          backgroundColor={aboutColor}
          onClick={onAbout}
        />
        or
        <ColorText
          text='contact me'
          backgroundColor={contactColor}
          onClick={onContact}
        />
      </p>
    </div>
  );
}
