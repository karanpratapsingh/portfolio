import { Card as AntDesignCard } from 'antd';
import clsx from 'clsx';
import React, { memo } from 'react';
import { background, border, color, dimensions } from './Base';

interface VideoProps {
  id: string;
}

function Video(props: VideoProps): React.ReactElement {
  const { id } = props;

  return (
    <AntDesignCard className={clsx(dimensions, border, color, 'h-40')}>
      <iframe
        className={clsx(dimensions, background, 'h-40')}
        src={`https://www.youtube.com/embed/${id}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </AntDesignCard>
  );
}

export default memo(Video);
