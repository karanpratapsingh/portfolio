import type { Project } from 'config/projects';
import React, { memo } from 'react';
import Conditional from '../Conditional';
import ScreenShotList from '../List/ScreenShot';
import SubHeader from '../SubHeader';
import DeploymentTagList from '../TagList/Deployment';
import StackTagList from '../TagList/Stack';
import SubProjectTagList from '../TagList/SubProject';
import BaseBottomSheet, { BaseBottomSheetProps } from './Base';

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
      <StackTagList stack={stack} />
      <DeploymentTagList deployment={deployment} />
      <Conditional condition={screenshots.length}>
        <ScreenShotList screenshots={screenshots} dimensions={dimensions} />
      </Conditional>
      <Conditional condition={subProjects.length}>
        <SubProjectTagList subProjects={subProjects} />
      </Conditional>
    </BaseBottomSheet>
  );
}

export default memo(ProjectBottomSheet);
