import { useMemo } from 'react';
import config from '../config';

interface BannerProps {
  onAbout: () => void;
  onContact: () => void;
}

export function Banner(props: BannerProps): React.ReactElement {
  const { onAbout, onContact } = props;
  const [aboutColor, contactColor]: string[] = useMemo(getRandomColorPair, []);

  return (
    <div className='banner flex flex-col flex-1 justify-center px-6 lg:px-10 py-10 dark:text-white'>
      <span className='text-3xl lg:text-5xl font-bold'>
        Hi, I am {config.personal.name}
      </span>
      <p className='my-2 text-lg lg:my-4 lg:text-2xl font-light'>
        {config.personal.title}
      </p>
      <p className='lg:text-xl font-light'>
        Read more
        <ColorText text='about me' backgroundColor={aboutColor} onClick={onAbout} />
        or
        <ColorText text='contact me' backgroundColor={contactColor} onClick={onContact} />
      </p>
    </div>
  );
}

interface ColorTextProps {
  text: string;
  backgroundColor: string;
  onClick?: () => void;
}

function ColorText(props: ColorTextProps): React.ReactElement {
  const { text, backgroundColor, onClick } = props;

  return (
    <span
      className='cursor-pointer mx-2 font-medium p-1 dark:text-black'
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {text}
    </span>
  )
}

function getRandomColorPair(): string[] {
  const colors: string[][] = [
    ['#F5E1FF', '#FFF8BC'],
    ['#CAF0F8', '#C9F2C7'],
    ['#D8E2DC', '#FAEDCD'],
    ['#EEEbff', '#F7D9C4'],
  ];

  const random: number = Math.round(Math.random() * (colors.length - 1));
  return colors[random];
}
