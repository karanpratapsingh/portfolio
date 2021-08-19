import { Tag } from 'antd';
import { Stack, StackInfo } from 'config';
import React, { memo, useCallback } from 'react';
import BaseTagList from './Base';

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
  }, []);

  return <BaseTagList title='Skills' data={stack} renderList={renderStack} />;
}

export default memo(StackList);
