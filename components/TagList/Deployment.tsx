import { LinkOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import React, { useCallback } from 'react';
import { Colors, Deployment } from '../../config';
import { Tuple } from '../../types';
import BaseTagList from './Base';

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
          aria-label={platform}
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

export default DeploymentList;
