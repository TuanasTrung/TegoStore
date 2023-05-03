import React from 'react'
import { MainContainer } from '../../components/layouts/style'
import ToyDetailComponent from '../../components/detail'
import Page from '../../components/Page'

const ToyDetail = () => {
  return (
    <Page title='Sản phẩm'>
      <MainContainer>
        <ToyDetailComponent />
      </MainContainer>
    </Page>
  )
}

export default ToyDetail