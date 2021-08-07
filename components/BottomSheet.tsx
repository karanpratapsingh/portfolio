import { BottomSheet as DefaultBottomSheet } from 'react-spring-bottom-sheet';
import config, { TagColor, WorkStack } from '../config';
import { SubHeader } from './SubHeader';
import { Tag } from 'antd';
import React from 'react';
import { SocialIcons } from './Footer';

interface BottomSheetProps {
  open: boolean;
  onDismiss: () => void;
}

function About(props: BottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

  function renderStack(entry: [string, string]): React.ReactNode {
    const [key, value] = entry;
    const color = TagColor[key];

    return (
      <div className='pb-1'>
        <Tag color={color}>{value}</Tag>
      </div>
    );
  }

  const stack = (
    <div className='flex flex-wrap mb-4'>
      {React.Children.toArray(Object.entries(WorkStack).map(renderStack))}
    </div>
  );

  return (
    <DefaultBottomSheet
      open={open}
      onDismiss={onDismiss}
    >
      <SubHeader
        className='lg:mt-4'
        title='About'
        description={config.personal.about}
      />
      <SubHeader
        title='Stack'
        description={stack}
      />
    </DefaultBottomSheet>
  )
}

function Contact(props: BottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

  return (
    <DefaultBottomSheet
      open={open}
      onDismiss={onDismiss}
    >
      <SubHeader
        className='lg:mt-4'
        title={`Let's Connect`}
        description='Do you have a project in mind? Want to hire me? Or simply wanna chat? Feel free to reach out'
      >
        <SocialIcons />
      </SubHeader>
    </DefaultBottomSheet>
  )
}

export const BottomSheet: Record<string, React.FC<BottomSheetProps>> = {
  About,
  Contact
}
