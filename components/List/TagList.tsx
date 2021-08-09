import { LinkOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import React, { useCallback } from 'react';
import { SubHeader } from '../../components';
import { Colors, Deployment, Stack, StackInfo, SubProject } from '../../config';
import { Tuple } from '../../types';

type BaseTagListData = any;

interface BaseTagListProps {
  title: string;
  data: BaseTagListData[];
  skipHeader?: boolean;
  renderList: (item: BaseTagListData) => React.ReactNode;
}

function BaseTagList(props: BaseTagListProps): React.ReactElement {
  const { data, renderList, title, skipHeader = false } = props;

  let list = (
    <div className='flex flex-wrap'>
      {React.Children.toArray(data.map(renderList))}
    </div>
  );

  if (skipHeader) {
    return list;
  }

  return <SubHeader title={title} description={list} />;
}

interface StackListProps {
  stack: Stack[];
}

export function StackList(props: StackListProps): React.ReactElement {
  const { stack } = props;

  const renderStack = useCallback((stack: Stack): React.ReactNode => {
    const { color, value } = StackInfo[stack];

    return (
      <div className='pb-1'>
        <Tag color={color}>{value}</Tag>
      </div>
    );
  }, []);

  return <BaseTagList title='Stack' data={stack} renderList={renderStack} />;
}

interface DeploymentListProps {
  skipHeader?: boolean;
  deployment: Deployment;
}

function DeploymentList(props: DeploymentListProps): React.ReactElement {
  const { deployment, skipHeader = false } = props;

  const renderDeployment = useCallback(
    (entry: Tuple<string>): React.ReactNode => {
      const [platform, url] = entry;
      const color = Colors[platform];

      const icon: React.ReactNode = <LinkOutlined />;

      return (
        <a
          className='pb-1'
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Tag icon={icon} color={color}>
            {platform}
          </Tag>
        </a>
      );
    },
    [],
  );

  return (
    <BaseTagList
      title='Deployments'
      skipHeader={skipHeader}
      data={Object.entries(deployment)}
      renderList={renderDeployment}
    />
  );
}

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
          <TagList.Deployment skipHeader deployment={deployment} />
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

export const TagList = {
  Stack: StackList,
  Deployment: DeploymentList,
  SubProject: SubProjectList,
};
