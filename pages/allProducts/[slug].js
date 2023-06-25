import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
import { MainContainer } from '../../components/layouts/style'
import GridPagination from '../../components/gridPagination'
import { GridPaginationStyle } from '../../components/gridPagination/styles'
import { getAllProducts } from '../../redux/apiRequest'
import Page from '../../components/Page'
import { useRouter } from 'next/router'

const allProducts = () => {
  const router = useRouter();
  const products = useSelector((state) => state.products.products.allProducts) || [];

  const showData = products.filter((val) => {
    if(val.name.toLowerCase().includes(router.query.s.toLowerCase())){
      return val;
    }
  })
  return (
    <Page title='Tất cả sản phẩm'>
      <MainContainer>
        <GridPaginationStyle>
          <Box className='box-title'>
            <Typography>TẤT CẢ ĐỒ CHƠI</Typography>
          </Box>
          {products?.length > 0 ? <GridPagination data={showData} /> : <p>loading...</p>}
        </GridPaginationStyle>
      </MainContainer>
    </Page>
  )
}

export default allProducts
