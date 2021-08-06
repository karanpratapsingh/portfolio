import { PageHeader, Switch } from 'antd';
import {
  IoSunnyOutline as SunIcon,
  IoMoonOutline as MoonIcon,
} from 'react-icons/io5';

export function Header(): React.ReactElement {
  return (
    <PageHeader
      extra={
        <div className='flex items-center'>
          <SunIcon className='text-2xl' />
          <Switch className='mx-3' />
          <MoonIcon className='text-xl' />
        </div>
      }
    />
  );
}
