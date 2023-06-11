import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SliderGridStyle } from './styles'
import { MainContainer } from '../layouts/style'
import { Box, Grid, Rating, Typography } from '@mui/material'
import Link from 'next/link'
import { getAllProducts } from '../../redux/apiRequest'
import SwiperSlider from '../swiperSlider'
import ButtonAddCart from '../buttonAddCart'
// import { useGetAllProductsQuery } from '../../features/productsApi'

const SliderGrid = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.products?.allProducts)
  const productForYou = [];

  for (let i = 0; i < products?.length; i++) {
    products[i].rating === 5 && productForYou.push(products[i])
  }

  useEffect(() => {
    getAllProducts(products, dispatch)
  }, [])

  // const { data, error, isLoading } = useGetAllProductsQuery()

  const renderTitle = (title) => {
    return (
      <Box className='title' sx={{ margin: '10px 0' }} >
        <span>
          {title}
        </span>
        <Link href={'/allProducts'}>
          <p>
            Tất cả sản phẩm
          </p>

        </Link>
      </Box>
    )
  }

  const renderSliders = () => {
    let itemsPerSlide = 4;
    let output = [];
    const numSlide = Math.ceil(productForYou?.length / itemsPerSlide);
    for (let i = 0; i < numSlide; i++) {
      output.push(
        <Grid container spacing={2} sx={{ flex: 1, width: '100%' }} key={i}>
          {(productForYou.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide)).map((pr, index) => (
            <Grid item md={3} key={pr?._id} className='grid-items'>
              <Box className='grid-item-product'>
                <Link href={`/product/${pr?._id}`}>
                  <Box className='grid-item-image'>
                    <img src={pr?.image} />
                  </Box>
                </Link>

                <Box className='grid-item-information'>
                  <Typography>{pr?.name}</Typography>
                  <Rating name="simple-controlled"
                    value={pr?.rating}
                    readOnly />
                  <Typography>{pr?.price} VND</Typography>
                  <ButtonAddCart
                    product={pr}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      );
    }
    return (
      <SwiperSlider
        items={output}
        loop={true}
      />
    )
  }

  return (
    <SliderGridStyle>
      <MainContainer>
        {renderTitle('Đồ chơi dành cho bạn')}
        {renderSliders()}
      </MainContainer>
    </SliderGridStyle>
  )
}

export default SliderGrid
