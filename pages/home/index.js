import React from 'react'
import { MainContainer } from '../../components/layouts/style'
import FeatureCategories from '../../components/featureCategories'
import Page from '../../components/Page'
import TopProduct from '../../components/topProduct'
import SliderGrid from '../../components/sliderGrid'
import TrendingNow from '../../components/trending'

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
