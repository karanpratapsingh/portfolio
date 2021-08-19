import { SubProject } from 'config';
import React, { memo, useCallback } from 'react';
import SubHeader from '../SubHeader';
import DeploymentList from './Deployment';

interface SubProjectListProps {
  subProjects: SubProject[];
}

function SubProjectList(props: SubProjectListProps): React.ReactElement {
  const { subProjects } = props;

  const renderSubProjectList = useCallback(
    (subProject: SubProject): React.ReactNode => {
      const { title, description, deployment } = subProject;

      return (
        <div className='flex flex-col my-1'>
          <span className='text-lg font-bold my-1'>{title}</span>
          <DeploymentList skipHeader deployment={deployment} />
          <p className='mt-1 font-light'>{description}</p>
        </div>
      );
    },
    [],
  );

  return (
    <SubHeader title='More Products' description='Some additional products'>
      {React.Children.toArray(subProjects.map(renderSubProjectList))}
    </SubHeader>
  );
}

export default memo(SubProjectList);
