import { PageHeader, Switch } from 'antd';
import Image from 'next/image';

function Header(): React.ReactElement {
  const dimensions = {
    height: 20,
    width: 20,
  };

  const checked = (
    <Image src='/assets/svg/switch/sun.svg' {...dimensions} alt='sun-icon' />
  );
  const unchecked = (
    <Image src='/assets/svg/switch/moon.svg' {...dimensions} alt='moon-icon' />
  );

  return (
    <PageHeader
      extra={
        <div className='flex items-center'>
          {checked}
          <Switch className='mx-2' />
          {unchecked}
        </div>
      }
    />
  );
}

export { Header };
