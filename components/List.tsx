import { Swiper } from 'swiper/react';
import { SubHeaderProps } from './SubHeader';
import { SubHeader } from '../components';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import React from 'react';

SwiperCore.use([Navigation, Pagination]);

interface ListProps extends SubHeaderProps {
  data: any;
  renderList: (item: any) => React.ReactNode;
}

function List(props: ListProps): React.ReactElement {
  const { data, renderList, title, description } = props;

  const swiperParams: SwiperOptions = {
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    pagination: true,
    preventClicksPropagation: true,
    preventClicks: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
  };

  return (
    <div className='px-10 pb-5'>
      <SubHeader title={title} description={description} />
      <Swiper {...swiperParams}>
        {React.Children.toArray(data.map(renderList))}
      </Swiper>
    </div>
  );
}

export { List };
