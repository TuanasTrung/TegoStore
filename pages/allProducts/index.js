import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
import { MainContainer } from '../../components/layouts/style'
import GridPagination from '../../components/gridPagination'
import { GridPaginationStyle } from '../../components/gridPagination/styles'
import { getAllProducts } from '../../redux/apiRequest'
import Page from '../../components/Page'

const allProducts = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products.allProducts);

  useEffect(() => {
    const paginationFunc = async () => {
      getAllProducts(products, dispatch)
    }
    paginationFunc()
  }, [])
  return (
    <Page title='Tất cả sản phẩm'>
      <MainContainer>
        <GridPaginationStyle>
          <Box className='box-title'>
            <Typography>TẤT CẢ ĐỒ CHƠI</Typography>
          </Box>
          {products?.length > 0 ? <GridPagination data={products} /> : <p>loading...</p>}
        </GridPaginationStyle>
      </MainContainer>
    </Page>
  )
}

export default allProducts
