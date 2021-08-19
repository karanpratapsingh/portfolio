import { useTheme } from 'next-themes';
import { IoMdMoon as MoonIcon } from 'react-icons/io';
import { IoSunnyOutline as SunIcon } from 'react-icons/io5';
import Conditional from './Conditional';

function Header(): React.ReactElement {
  const { setTheme, resolvedTheme } = useTheme();

  function setDark(): void {
    setTheme('dark');
  }

  function setLight(): void {
    setTheme('light');
  }

  return (
    <div className='flex items-center justify-end'>
      <div className='mt-5 mr-5 lg:mt-10 lg:mr-0 cursor-pointer hover:opacity-80 dark:text-white'>
        <Conditional condition={resolvedTheme === 'light'}>
          <SunIcon className='text-3xl lg:text-4xl' onClick={setDark} />
        </Conditional>
        <Conditional condition={resolvedTheme === 'dark'}>
          <MoonIcon
            className='text-3xl lg:text-4xl text-white'
            onClick={setLight}
          />
        </Conditional>
      </div>
    </div>
  );
}

export default Header;
