import React from 'react';
import { BottomSheet as DefaultBottomSheet } from 'react-spring-bottom-sheet';
import config, { Project, WorkStack } from '../../config';
import { SocialIcons } from '../Footer';
import { SubHeader } from '../SubHeader';
import { StackList } from './StackList';

interface BottomSheetProps {
  open: boolean;
  onDismiss: () => void;
}

function About(props: BottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

  return (
    <DefaultBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader
        className='lg:mt-4'
        title='About'
        description={config.personal.about}
      />
      <SubHeader title='Stack' description={<StackList stack={WorkStack} />} />
    </DefaultBottomSheet>
  );
}

function Contact(props: BottomSheetProps): React.ReactElement {
  const { open, onDismiss } = props;

  return (
    <DefaultBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader
        className='lg:mt-4'
        title={`Let's Connect`}
        description='Do you have a project in mind? Want to hire me? Or simply wanna chat? Feel free to reach out'
      >
        <SocialIcons />
      </SubHeader>
    </DefaultBottomSheet>
  );
}

interface ProjectBottomSheetProps extends BottomSheetProps {
  project: Project;
}

function ProjectDetails(props: ProjectBottomSheetProps): React.ReactElement {
  const { open, onDismiss, project } = props;

  return (
    <DefaultBottomSheet open={open} onDismiss={onDismiss}>
      <SubHeader
        className='lg:mt-4'
        title={project.title}
        description={project.description}
      ></SubHeader>
      <SubHeader
        title='Stack'
        description={<StackList stack={project.stack} />}
      />
    </DefaultBottomSheet>
  );
}

export const BottomSheet = {
  About,
  Contact,
  ProjectDetails,
};
