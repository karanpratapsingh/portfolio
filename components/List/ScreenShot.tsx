import Image from 'next/image';
import React, { memo, useCallback } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { defaultDimensions } from '../../config';
import { Tuple } from '../../types';
import SubHeader from '../SubHeader';

interface ScreenShotListProps {
  dimensions?: Tuple<number>;
  screenshots: string[];
}

function ScreenShotList(props: ScreenShotListProps): React.ReactElement {
  const { screenshots } = props;

  const [height, width] = props?.dimensions ?? defaultDimensions;

  const renderScreenShotList = useCallback(
    (screenshot: string) => {
      const style: React.CSSProperties = {
        height,
        width,
      };

      return (
        <div
          className='flex-shrink-0 mr-2 rounded overflow-hidden bg-placeholder-light dark:bg-placeholder-dark'
          style={style}
        >
          <Image
            loading='eager'
            src={screenshot}
            height={height}
            width={width}
            objectFit='cover'
            alt=''
          />
        </div>
      );
    },
    [height, width],
  );

  return (
    <SubHeader
      title='Screenshots'
      description={
        <ScrollContainer
          className='list flex overflow-auto mt-2 mb-1'
          hideScrollbars={false}
        >
          {React.Children.toArray(screenshots.map(renderScreenShotList))}
        </ScrollContainer>
      }
    />
  );
}

export default memo(ScreenShotList);
