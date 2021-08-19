import clsx from 'clsx';
import { memo } from 'react';

export interface SubHeaderProps {
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

function SubHeader(props: SubHeaderProps): React.ReactElement {
  const { title, description, className, children } = props;

  return (
    <div
      className={clsx(
        'flex flex-col px-6 lg:px-10 pb-4 dark:text-white',
        className,
      )}
    >
      <span className='text-2xl lg:text-2xl font-bold mb-1'>{title}</span>
      <span className='text-base font-light'>{description}</span>
      {children}
    </div>
  );
}

export default memo(SubHeader);
