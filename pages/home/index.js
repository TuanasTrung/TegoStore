import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DOMAIN_SERVER_API } from '../../config';
import { MainContainer } from '../../components/layouts/style'
import FeatureCategories from '../../components/featureCategories'
import Page from '../../components/Page'
import TopProduct from '../../components/topProduct'
import SliderGrid from '../../components/sliderGrid'
import TrendingNow from '../../components/trending'
import { loginSuccess } from '../../redux/Slice/authSlice';


const HomePage = () => {

  return (
    <>
      <Page title='Trang chủ'>
        <TopProduct />

        <SliderGrid />

        <TrendingNow />

        <FeatureCategories />
      </Page>
    </>
  )
}

export default HomePage
