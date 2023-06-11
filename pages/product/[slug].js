import React from 'react'
import { MainContainer } from '../../components/layouts/style'
import ToyDetailComponent from '../../components/detail'
import Page from '../../components/Page'
import TrendingNow from '../../components/trending'

const ToyDetail = () => {
  return (
    <Page title='Chi tiết sản phẩm'>
      <MainContainer>
        <ToyDetailComponent />

        <TrendingNow />
      </MainContainer>
    </Page>
  )
}

export default ToyDetail