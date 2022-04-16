import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IoMdMoon as MoonIcon } from 'react-icons/io';
import { IoSunnyOutline as SunIcon } from 'react-icons/io5';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4'
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark',
        )
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='text-gray-900 dark:text-gray-100'
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <SunIcon className='fade-in text-xl' />
        ) : (
          <MoonIcon className='fade-in text-xl' />
        )}
      </svg>
    </button>
  );
};

export default ThemeSwitch;
