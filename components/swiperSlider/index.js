import { useState } from 'react';
import { useTheme } from '@mui/material';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import { SliderStyle } from './style';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperSlider = ({
  items,
  navigation = { enabled: true },
  pagination = {},
  ...props
}) => {
  const { palette: { text } } = useTheme();
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);

  const {
    hideDisabled = false,
    navInSide = false,
    navOpacity = 1,
    ...navigationProps
  } = navigation || {};

  const getClass = (flag, className) => {
    if (flag) {
      return ' ' + className;
    }
    return '';
  }

  return (
    <SliderStyle className={
      'sliders '
      + navigation.navClass
      + getClass(pagination && !pagination.enabled, 'no-pagination')
      + getClass(hideDisabled, 'hide-nav-disabled')
    }>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          enabled: true,
          nextEl: nextEl,
          prevEl: prevEl,
          ...navigationProps,
        }}
        pagination={{
          enabled: true,
          clickable: true,
          ...pagination,
        }}
        spaceBetween={24}
        {...props}
      >
        {items.map((item, key) => (
          <SwiperSlide key={key}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {(navigation?.enabled && items.length > 1) && (
        <>
          <div
            className={'nav-button-prev' + getClass(navInSide, 'nav-inside')}
            style={{ opacity: navOpacity }}
            ref={ref => setPrevEl(ref)}
          >
            <RiArrowLeftSLine size={18} color={text.sub} />
          </div>
          <div
            className={'nav-button-next' + getClass(navInSide, 'nav-inside')}
            style={{ opacity: navOpacity }}
            ref={ref => setNextEl(ref)}
          >
            <RiArrowRightSLine size={18} color={text.sub} />
          </div>
        </>
      )}
    </SliderStyle>
  )
}

export default SwiperSlider;