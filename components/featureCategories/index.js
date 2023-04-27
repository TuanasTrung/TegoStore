import {
  Box,
  useTheme,
  CircularProgress,
} from "@mui/material";
import NextLink from 'next/link';
// import slug from 'slug';
import {
  RiMouseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';
import { useRouter } from "next/router";

import SwiperSlider from '../swiperSlider/index';

import { FeatureToysStyle } from "./style";
import { useMemo } from "react";
import { PATH_JOB } from "../../routes/path";
import { SliderStyle } from "../swiperSlider/style";

const toyCategories = []

for (let i = 0; i < 5; i++) {
  toyCategories.push(
    {
      id: i,
      type: i,
      totalToy: i * 10 + 20,
    }
  )
}

const FeatureJobs = () => {
  const { palette } = useTheme();
  const router = useRouter();

  const ToyCatItem = ({ item }) => {

    const ToyCatItemName = () => {
      switch (item.type) {
        case 0:
          return <>Batman</>;
        case 1:
          return <>SuperMan</>;
        case 2:
          return <>Marvel</>;
        case 3:
          return <>Doll</>;
        case 4:
          return <>Mickey</>;
      }
    };

    return (
      <div className="toy-item">
        <img className="toy-thumbnail" src={`/assets/images/toy-categories/${item.type}.png`} alt="thumbnail" style={{ maxHeight: '287px' }} />
        <div className="toy-content">
          <h3 className="toy-title" style={{ marginBottom: '6px' }}>
            {/* <NextLink href={PATH_JOB.searchPath}><a onClick={(e) => {
              e.preventDefault();
              onClickCat(item);
            }}> */}
            <a>
              {ToyCatItemName()}
            </a>
            {/* </NextLink> */}
          </h3>
          <p className="toy-desc">{item.totalToy || 0} Đồ chơi </p>
        </div >
      </div >
    )
  }

  return (
    <FeatureToysStyle>
      <Box display="flex" sx={{ width: '100%' }}>
        <Box className="feature-title-box">
          <div className="title-line line-right">
            <strong>Danh mục</strong>
            <span></span>
          </div>
          <div className="title-line line-left">
            <span></span>
            <strong>Nổi bật</strong>
          </div>

          <Box textAlign="center" mt={6} mb={2}>
            <RiMouseLine color={palette.text.sub} size={20} />
          </Box>
          <Box textAlign="center">
            <p className="title-desc">
              <RiArrowLeftSLine color={palette.text.sub} size={16} />
              <span>Trượt để khám phá</span>
              <RiArrowRightSLine color={palette.text.sub} size={16} />
            </p>
          </Box>
        </Box>

        <Box flex={1} className="toys-box">
          <SwiperSlider
            items={toyCategories.map(toy => (
              <ToyCatItem key={toy.type} item={toy} />
            ))}
            spaceBetween={24}
            navigation={{ enabled: false }}
            pagination={{ enabled: false }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: { enabled: false },
                loop: true,
              },
              768: {
                slidesPerView: 2,
                pagination: { enabled: false },
                loop: toyCategories.length > 2,
              },
              1200: {
                slidesPerView: 4,
                pagination: { enabled: false },
                loop: toyCategories.length > 8,
              },
            }}
            style={{ paddingBottom: '6px' }}
          />
        </Box>
      </Box>
    </FeatureToysStyle>
  )
}

export default FeatureJobs;