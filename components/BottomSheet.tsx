import { useTheme } from 'next-themes';
import React, { Fragment } from 'react';
import { IoCloseCircle as CloseIcon } from 'react-icons/io5';
import { BottomSheet as DefaultBottomSheet } from 'react-spring-bottom-sheet';
import config, { Colors, Project, WorkStack } from '../config';
import { getThemeClassName } from '../utils';
import { ColorText } from './Banner/ColorText';
import { Conditional } from './Conditional';
import { SocialIcons } from './Footer';
import { List, TagList } from './List';
import { SubHeader } from './SubHeader';

const { personal } = config;

interface BaseBottomSheetProps {
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

interface AboutBottomSheetProps extends BaseBottomSheetProps {}

function AboutBottomSheet(props: AboutBottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

  const about = (
    <Fragment>
      <span>{personal.about}</span>
      <p className='mt-4'>
        <ColorText
          className='px-2'
          text='Resume'
          url={personal.resume}
          backgroundColor={Colors.resume}
        />
      </p>
    </Fragment>
  );

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader title='About' description={about} />
      <TagList.Stack stack={WorkStack} />
    </BaseBottomSheet>
  );
}

interface ContactBottomSheetProps extends BaseBottomSheetProps {}

function ContactBottomSheet(
  props: ContactBottomSheetProps,
): React.ReactElement {
  const { open, onDismiss } = props;

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader
        title={`Let's Connect`}
        description='Do you have a project in mind? Want to hire me? or simply wanna chat? Feel free to reach out'
      >
        <SocialIcons className='mt-4 mb-2' />
      </SubHeader>
    </BaseBottomSheet>
  );
}

interface ProjectBottomSheetProps extends BaseBottomSheetProps {
  project: Project;
}

function ProjectBottomSheet(
  props: ProjectBottomSheetProps,
): React.ReactElement {
  const { open, onDismiss, project } = props;
  const {
    title,
    description,
    stack,
    deployment,
    dimensions,
    screenshots,
    subProjects,
  } = project;

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader title={title} description={description} />
      <TagList.Stack stack={stack} />
      <TagList.Deployment deployment={deployment} />
      <Conditional condition={screenshots.length}>
        <List.ScreenShot screenshots={screenshots} dimensions={dimensions} />
      </Conditional>
      <Conditional condition={subProjects.length}>
        <TagList.SubProject subProjects={subProjects} />
      </Conditional>
    </BaseBottomSheet>
  );
}

export const BottomSheet = {
  About: AboutBottomSheet,
  Contact: ContactBottomSheet,
  Project: ProjectBottomSheet,
};
