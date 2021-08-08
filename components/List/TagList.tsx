import { LinkOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import React, { useCallback } from 'react';
import { SubHeader } from '../../components';
import { Colors, Deployment, Stack, StackInfo } from '../../config';
import { EntryTuple } from '../../types';

type BaseTagListData = any;

interface BaseTagListProps {
  title: string;
  data: BaseTagListData[];
  renderList: (item: BaseTagListData) => React.ReactNode;
}

function BaseTagList(props: BaseTagListProps): React.ReactElement {
  const { data, renderList, title } = props;

  return (
    <SubHeader
      title={title}
      description={
        <div className='flex flex-wrap'>
          {React.Children.toArray(data.map(renderList))}
        </div>
      }
    />
  );
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
  deployment: Deployment;
}

function DeploymentList(props: DeploymentListProps): React.ReactElement {
  const { deployment } = props;

  const renderDeployment = useCallback((entry: EntryTuple): React.ReactNode => {
    const [platform, url] = entry;
    const color = Colors[platform];

    const icon: React.ReactNode = <LinkOutlined />;

    return (
      <a className='pb-1' href={url} target='_blank' rel='noopener noreferrer'>
        <Tag icon={icon} color={color}>
          {platform}
        </Tag>
      </a>
    );
  }, []);

  return (
    <BaseTagList
      title='Deployments'
      data={Object.entries(deployment)}
      renderList={renderDeployment}
    />
  );
}

export const TagList = {
  Stack: StackList,
  Deployment: DeploymentList,
};
