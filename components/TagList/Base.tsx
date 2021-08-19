import React from 'react';
import SubHeader from '../SubHeader';

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

export default BaseTagList;
