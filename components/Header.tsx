import { PageHeader } from 'antd';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import {
  IoMoonOutline as MoonIcon,
  IoSunnyOutline as SunIcon
} from 'react-icons/io5';

export function Header(): React.ReactElement {
  const { theme, setTheme } = useTheme();

  const isDark: boolean = useMemo(() => theme === 'dark', [theme]);

  function setDark(): void {
    setTheme('dark')
  }

  function setLight(): void {
    setTheme('light')
  }

  let icon: React.ReactNode = <SunIcon className='text-3xl' onClick={setDark} />;

  if (isDark) {
    icon = <MoonIcon className='text-3xl' onClick={setLight} />;
  }

  return (
    <PageHeader
      extra={
        <div className='flex items-center cursor-pointer hover:opacity-80'>
          {icon}
        </div>
      }
    />
  );
}
