import React, { useState } from 'react'
import { SliderGridStyle } from './styles'
import { MainContainer } from '../layouts/style'
import { Box, Divider, Grid, Rating, Button, Typography } from '@mui/material'
import Link from 'next/link'
import SwiperSlider from '../swiperSlider'

const products = [
  {
    id: 1,
    image: '/assets/images/product/0.png',
    name: 'DINOSAUR',
    price: '300.000',
    slug: '1',
    rating: 5,
  },
  {
    id: 2,
    image: '/assets/images/product/1.png',
    name: 'DINOSAUR',
    price: '300.000',
    slug: '2',
    rating: 5,
  },
  {
    id: 3,
    image: '/assets/images/product/2.png',
    name: 'DINOSAUR',
    price: '300.000',
    slug: '3',
    rating: 4,
  },
  {
    id: 4,
    image: '/assets/images/product/3.png',
    name: 'DINOSAUR',
    price: '300.000',
    slug: '4',
    rating: 4,
  },
  {
    id: 5,
    image: '/assets/images/product/4.png',
    name: 'DINOSAUR',
    price: '300.000',
    slug: '5',
    rating: 4,
  },
]

const SliderGrid = () => {

  const renderTitle = (title) => {
    return (
      <Box sx={{ margin: '10px 0' }}>
        <span>
          {title}
        </span>
      </Box>
    )
  }

  const renderSliders = () => {
    let itemsPerSlide = 4;
    let output = [];
    const numSlide = Math.ceil(products.length / itemsPerSlide);
    for (let i = 0; i < numSlide; i++) {
      output.push(
        <Grid container spacing={2} sx={{ flex: 1, width: '100%' }} key={i}>
          {(products.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide)).map((pr, index) => (
            <Grid item md={3} key={pr.id} className='grid-items'>
              <Box className='grid-item-product'>
                <Link href={`/product/${pr.slug}`}>
                  <Box className='grid-item-image'>
                    <img src={pr.image} />
                  </Box>
                </Link>

                <Box className='grid-item-information'>
                  <Typography>{pr.name}</Typography>
                  <Rating name="simple-controlled"
                    value={pr.rating}
                    readOnly />
                  <Typography>{pr.price} VND</Typography>
                  <Button className='item-button' onClick={() => console.log('id: ', pr.id)}>
                    Add to Bag
                  </Button>
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
