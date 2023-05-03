import React, { useState, useRef, useEffect } from 'react'
import { ToyDetailStyles } from './styles'
import { RiAddLine, RiSubtractLine, RiErrorWarningLine } from "react-icons/ri";
import { Box, Grid, Typography, Button, Tooltip, IconButton } from '@mui/material'
import { useRouter } from 'next/router'

const products = [
  {
    id: 1,
    image: '/assets/images/product/0.png',
    name: 'DINOSAUR',
    price: '300.000',
    slug: '1',
    status: 'Còn hàng',
    rating: 5,
  },
  {
    id: 2,
    image: '/assets/images/product/1.png',
    name: 'DINOSAUR',
    price: '300.000',
    status: 'Còn hàng',
    slug: '2',
    rating: 5,
  },
  {
    id: 3,
    image: '/assets/images/product/2.png',
    name: 'DINOSAUR',
    price: '300.000',
    status: 'Còn hàng',
    slug: '3',
    rating: 4,
  },
  {
    id: 4,
    image: '/assets/images/product/3.png',
    name: 'DINOSAUR',
    price: '300.000',
    status: 'Còn hàng',
    slug: '4',
    rating: 4,
  },
  {
    id: 5,
    image: '/assets/images/product/4.png',
    name: 'DINOSAUR',
    price: '300.000',
    status: 'Còn hàng',
    slug: '5',
    rating: 4,
  },
]

const ToyDetailComponent = () => {
  const [quantity, setQuantity] = useState(0)
  const limitQuantityCanBuy = 2;
  const router = useRouter();

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1)
  }

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <ToyDetailStyles>
      <Grid container className='grid-container'>
        <Grid item md={8}>
          <Box className='detail-image'>
            <img src={products[0].image} />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box className='detail-information'>
            <Typography className='detail-name'>{products[0].name}</Typography>
            <Typography className='detail-price'>{products[0].price} VND</Typography>
            <Typography className='detail-status'>{products[0].status}</Typography>
            <Box className='detail-quantity'>
              <Box className='change-quantity'>
                <Button className='minus' onClick={handleMinusQuantity} disabled={quantity === 0}>
                  <RiSubtractLine color='#000' size={23} />
                </Button>
                <Box className='number'>{quantity}</Box>
                <Button className='plus' onClick={handlePlusQuantity} disabled={quantity === limitQuantityCanBuy}>
                  <RiAddLine color='#000' size={23} />
                </Button>
              </Box>
              <Box className='limit-quantity'>
                <Typography className='max-quantity'>Limit {limitQuantityCanBuy}</Typography>
                <Tooltip title='Chúng tôi giới hạn số lượng mua ở mỗi sản phẩm để công bằng với tất cả khách hàng.' placement='top'>
                  <IconButton disableRipple>
                    <RiErrorWarningLine color='rgb(224, 224, 224)' size={20} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <Box display={'flex'}>
              <Button className='item-button' onClick={() => console.log('id: ', products[0].id)}>
                Add to Bag
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ToyDetailStyles>
  )
}

export default ToyDetailComponent
