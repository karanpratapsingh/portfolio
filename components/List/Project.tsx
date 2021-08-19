import { Project } from 'config';
import React, { memo, useCallback } from 'react';
import ProjectCard from '../Card/Project';
import { SubHeaderProps } from '../SubHeader';
import BaseList from './Base';

interface ProjectListProps extends SubHeaderProps {
  projects: Project[];
  onProject: (project: Project) => void;
}

function ProjectList(props: ProjectListProps): React.ReactElement {
  const { title, description, projects, onProject } = props;

  const renderProjectsList = useCallback(
    (project: Project): React.ReactNode => {
      const { title, description, banner } = project;

      function onProjectClick(): void {
        onProject(project);
      }

      return (
        <ProjectCard
          title={title}
          description={description}
          banner={banner}
          onClick={onProjectClick}
        />
      );
    },
    [onProject],
  );

  return (
    <BaseList
      title={title}
      description={description}
      data={projects}
      renderList={renderProjectsList}
    />
  );
}

export default memo(ProjectList);
