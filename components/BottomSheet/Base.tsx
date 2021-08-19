import { useTheme } from 'next-themes';
import React from 'react';
import { IoCloseCircle as CloseIcon } from 'react-icons/io5';
import { BottomSheet as DefaultBottomSheet } from 'react-spring-bottom-sheet';
import { getThemeClassName } from '../../utils';

export interface BaseBottomSheetProps {
  open: boolean;
  onDismiss: VoidFunction;
  children?: React.ReactNode;
}

function BaseBottomSheet(props: BaseBottomSheetProps): React.ReactElement {
  const { open, onDismiss, children } = props;
  const { resolvedTheme } = useTheme();
  const className = getThemeClassName('bottomsheet', resolvedTheme);

  const header = (
    <div
      className='flex items-center justify-end cursor-pointer px-5'
      onClick={onDismiss}
    >
      <CloseIcon className='text-2xl text-placeholder-dark dark:text-placeholder-light opacity-40' />
    </div>
  );

  return (
    <DefaultBottomSheet className={className} open={open} onDismiss={onDismiss}>
      <div className='pb-2'>
        {header}
        {children}
      </div>
    </DefaultBottomSheet>
  );
}

export default BaseBottomSheet;
