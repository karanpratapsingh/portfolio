import { Button } from 'antd';
import { useTheme } from 'next-themes';
import React, { Fragment, useMemo } from 'react';
import { BottomSheet as DefaultBottomSheet } from 'react-spring-bottom-sheet';
import config, { Project, WorkStack } from '../../config';
import { getRandomColorPair, getThemeClassName } from '../../util';
import { ColorText } from '../Banner/ColorText';
import { Conditional } from '../Conditional';
import { SocialIcons } from '../Footer';
import { List, TagList } from '../List';
import { SubHeader } from '../SubHeader';

const { personal } = config;

interface BaseBottomSheetProps {
  open: boolean;
  onDismiss: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

function BaseBottomSheet(props: BaseBottomSheetProps): React.ReactElement {
  const { open, onDismiss, children, footer } = props;
  const { resolvedTheme } = useTheme();
  const className = getThemeClassName('bottomsheet', resolvedTheme);

  return (
    <DefaultBottomSheet
      className={className}
      open={open}
      onDismiss={onDismiss}
      footer={footer}
    >
      {children}
    </DefaultBottomSheet>
  );
}

interface AboutBottomSheetProps extends BaseBottomSheetProps {}

function AboutBottomSheet(props: AboutBottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

  const [resumeColor] = useMemo(getRandomColorPair, []);

  const about = (
    <Fragment>
      <span>{personal.about}</span>
      <p className='-ml-2 mt-4'>
        <ColorText
          text='Resume'
          url={personal.resume}
          backgroundColor={resumeColor}
        />
      </p>
    </Fragment>
  );

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader className='lg:mt-4' title='About' description={about} />
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
        className='lg:mt-4'
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
  const { title, description, stack, deployment, screenshots, subProjects } =
    project;

  const footer = (
    <div className='flex items-center justify-end'>
      <Button
        className='font-medium bg-transparent hover:bg-transparent focus:bg-transparent'
        danger
        onClick={onDismiss}
      >
        close
      </Button>
    </div>
  );

  return (
    <BaseBottomSheet open={open} onDismiss={onDismiss} footer={footer}>
      <SubHeader className='lg:mt-4' title={title} description={description} />
      <TagList.Stack stack={stack} />
      <TagList.Deployment deployment={deployment} />
      <Conditional condition={screenshots.length}>
        <List.ScreenShot screenshots={screenshots} />
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
