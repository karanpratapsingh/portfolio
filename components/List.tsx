import { SubHeaderProps } from './SubHeader';
import { SubHeader } from '../components';
import React from 'react';
import { Skeleton } from 'antd';

type ListData = any;

interface ListProps extends SubHeaderProps {
  data: ListData[];
  renderList: (item: ListData) => React.ReactNode;
}

function List(props: ListProps): React.ReactElement {
  const { data, renderList, title, description } = props;

  function renderPlaceholder(): React.ReactNode {
    return (
      <div className='flex flex-shrink-0 rounded w-72 lg:w-80 h-36 overflow-hidden mr-2'>
        <Skeleton.Avatar active shape='square' style={{ height: 150, width: 400 }} />
      </div>
    );
  }

  let list: React.ReactNode = React.Children.toArray(data.map(renderList));

  if (!data.length) {
    const data = new Array(6).fill(0);
    list = React.Children.toArray(data.map(renderPlaceholder));
  }

  return (
    <div className='px-6 lg:px-10 pb-5'>
      <SubHeader title={title} description={description} />
      <div className='flex overflow-auto py-2'>
        {list}
      </div>
    </div>
  );
}

export { List };
