import { SubHeaderProps } from './SubHeader';
import { SubHeader } from '../components';
import React from 'react';

interface ListProps extends SubHeaderProps {
  data: any[];
  renderList: (item: any) => React.ReactNode;
}

function List(props: ListProps): React.ReactElement {
  const { data, renderList, title, description } = props;

  return (
    <div className='px-10 pb-5'>
      <SubHeader title={title} description={description} />
      <div className='flex overflow-auto py-2'>
        {React.Children.toArray(data.map(renderList))}
      </div>
    </div>
  );
}

export { List };
