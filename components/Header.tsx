import { useTheme } from 'next-themes';
import { IoIosSunny as SunIcon, IoMdMoon as MoonIcon } from 'react-icons/io';
import { Conditional } from './Conditional';

export function Header(): React.ReactElement {
  const { theme, setTheme } = useTheme();

  function setDark(): void {
    setTheme('dark');
  }

  function setLight(): void {
    setTheme('light');
  }

  return (
    <div className='flex justify-end'>
      <div className='mt-5 mr-5 lg:mt-10 lg:mr-0 cursor-pointer hover:opacity-80'>
        <Conditional condition={theme === 'light'}>
          <SunIcon className='text-4xl' onClick={setDark} />
        </Conditional>
        <Conditional condition={theme === 'dark'}>
          <MoonIcon className='text-3xl text-white' onClick={setLight} />
        </Conditional>
      </div>
    </div>
  );
}
