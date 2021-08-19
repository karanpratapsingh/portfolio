import React from 'react';
import { Video } from '../../types';
import VideoCard from '../Card/Video';
import { SubHeaderProps } from '../SubHeader';
import BaseList from './Base';

interface VideoListProps extends SubHeaderProps {
  videos: Video[];
}

function VideoList(props: VideoListProps): React.ReactElement {
  const { title, description, videos } = props;

  function renderVideoList(video: Video): React.ReactNode {
    return <VideoCard id={video.id} />;
  }

  return (
    <BaseList
      title={title}
      description={description}
      data={videos}
      renderList={renderVideoList}
    />
  );
}

export default VideoList;
