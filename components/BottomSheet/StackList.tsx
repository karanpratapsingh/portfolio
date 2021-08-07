import { Tag } from 'antd';
import React, { useCallback } from 'react';
import { Stack, StackInfo } from '../../config';

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

  return (
    <div className='flex flex-wrap mb-4'>
      {React.Children.toArray(stack.map(renderStack))}
    </div>
  );
}
