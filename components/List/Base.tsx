import { Skeleton } from 'antd';
import React, { memo, useCallback } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import SubHeader, { SubHeaderProps } from '../SubHeader';

type BaseListData = any;

interface BaseListProps extends SubHeaderProps {
  data: BaseListData[];
  renderList: (item: BaseListData) => React.ReactNode;
}

function BaseList(props: BaseListProps): React.ReactElement {
  const { data, renderList, title, description } = props;

  const renderPlaceholder = useCallback((): React.ReactNode => {
    return (
      <div className='list flex flex-shrink-0 rounded w-72 lg:w-80 h-40 overflow-hidden mr-2'>
        <Skeleton.Avatar
          active
          shape='square'
          style={{ height: 160, width: 400 }}
        />
      </div>
    );
  }, []);

  let list: React.ReactNode = React.Children.toArray(data.map(renderList));

  if (!data.length) {
    const data = new Array(6).fill(0);
    list = React.Children.toArray(data.map(renderPlaceholder));
  }

  return (
    <div className='pb-5'>
      <SubHeader title={title} description={description} />
      <ScrollContainer
        className='list flex overflow-auto pl-6 lg:pl-10 py-2'
        hideScrollbars={false}
      >
        {list}
      </ScrollContainer>
    </div>
  );
}

export default memo(BaseList);
