import { Stack, StackInfo } from 'config/stack';
import React, { useCallback } from 'react';

interface StackListProps {
  stack: Stack[];
}

function StackList(props: StackListProps): React.ReactElement {
  const { stack } = props;

  const renderList = useCallback(stack => {
    const { value, color } = StackInfo[stack];

    return (
      <span
        className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white'
        style={{ background: color }}
        key={stack}
      >
        {value}
      </span>
    );
  }, []);

  return (
    <div className='mb-2 flex flex-wrap'>
      {React.Children.toArray(stack.map(renderList))}
    </div>
  );
}

export default StackList;
