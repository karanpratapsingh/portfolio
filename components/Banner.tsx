import { useMemo } from 'react';
import config from '../config';

interface BannerProps {
  onAbout: () => void
  onContact: () => void
}

export function Banner(props: BannerProps): React.ReactElement {
  const { onAbout, onContact } = props;
  const colors: string[] = useMemo(getRandomColorPair, []);

  return (
    <div className='banner flex flex-col flex-1 justify-center px-6 lg:px-10 py-10'>
      <h1 className='text-3xl lg:text-5xl font-bold'>
        Hi, I am {config.personal.name}
      </h1>
      <p className='my-2 text-lg lg:my-4 lg:text-2xl font-light'>{config.personal.title}</p>
      <p className='lg:text-xl font-light'>
        Read more
        <span className='cursor-pointer mx-2 font-medium p-1' onClick={onAbout} style={{ backgroundColor: colors[0] }}>
          about me
        </span>
        or
        <span className='cursor-pointer mx-2 font-medium p-1' onClick={onContact} style={{ backgroundColor: colors[1] }}>
          contact me
        </span>
      </p>
    </div>
  );
}

function getRandomColorPair(): string[] {
  const colors: string[][] = [
    ['#F5E1FF', '#FFF8BC'],
    ['#caf0f8', '#C9f2c7'],
    ['#d8e2dc', '#faedcd'],
    ['#eeebff', '#f7d9c4'],
  ];

  const random: number = Math.round(Math.random() * (colors.length - 1));
  return colors[random];
}
