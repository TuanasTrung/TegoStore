import React from 'react'
import { MainContainer } from '../../components/layouts/style'
import FeatureCategories from '../../components/featureCategories'
import Page from '../../components/Page'
import TopProduct from '../../components/topProduct'

const HomePage = () => {
  return (
    <>
      <Page title='Trang chủ'>
        <TopProduct />

        <FeatureCategories />
      </Page>
    </>
  )
}

export default HomePage
