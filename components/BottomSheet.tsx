import { BottomSheet as DefaultBottomSheet } from 'react-spring-bottom-sheet';
import config, { Project, Stack, StackInfo, TagColor, WorkStack } from '../config';
import { SubHeader } from './SubHeader';
import { Tag } from 'antd';
import React from 'react';
import { SocialIcons } from './Footer';
import { useCallback } from 'react';

interface BottomSheetProps {
  open: boolean;
  onDismiss: () => void;
}

function About(props: BottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

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
        description={<StackList stack={WorkStack} />}
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

interface ProjectBottomSheetProps extends BottomSheetProps {
  project: Project;
}

function ProjectDetails(props: ProjectBottomSheetProps): React.ReactElement {
  const { open, onDismiss, project } = props;

  return (
    <DefaultBottomSheet
      open={open}
      onDismiss={onDismiss}
    >
      <SubHeader
        className='lg:mt-4'
        title={project.title}
        description={project.description}
      >
      </SubHeader>
      <SubHeader
        title='Stack'
        description={<StackList stack={project.stack} />}
      />
    </DefaultBottomSheet>
  )
}

interface StackListProps {
  stack: Stack[];
}

function StackList(props: StackListProps): React.ReactElement {
  const { stack } = props;

  const renderStack = useCallback((stack: Stack): React.ReactNode => {
    const { color, value } = StackInfo[stack];

    return (
      <div className='pb-1'>
        <Tag color={color}>{value}</Tag>
      </div>
    );
  }, [])

  return (
    <div className='flex flex-wrap mb-4'>
      {React.Children.toArray(stack.map(renderStack))}
    </div>
  )
};

export const BottomSheet = {
  About,
  Contact,
  ProjectDetails
}
