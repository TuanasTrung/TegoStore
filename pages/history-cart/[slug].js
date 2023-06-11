import React from 'react'
import { MainContainer } from '../../components/layouts/style'
import Page from '../../components/Page'
import DetailBill from '../../components/detailBill'

const ToyDetail = () => {
  return (
    <Page title='Chi tiết hóa đơn'>
      <MainContainer>
        <DetailBill />
      </MainContainer>
    </Page>
  )
}

export default ToyDetail