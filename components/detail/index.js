import React, { useState, useRef, useEffect } from 'react'
import { ToyDetailStyles } from './styles'
import { RiAddLine, RiSubtractLine, RiErrorWarningLine } from "react-icons/ri";
import { Box, Grid, Typography, Button, Tooltip, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { getProductById } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddCart from '../buttonAddCart';

const ToyDetailComponent = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product?.product)

  const [quantity, setQuantity] = useState(0)
  const limitQuantityCanBuy = product?.quantity;
  const router = useRouter();

  useEffect(() => {
    getProductById(router.query.slug, dispatch)
  }, [])

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
            <img src={product?.image} />
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box className='detail-information'>
            <Typography className='detail-name'>{product?.name}</Typography>
            <Typography className='detail-price'>{product?.price} VND</Typography>
            <Typography className='detail-status'>{product?.status}</Typography>
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
              <ButtonAddCart
                product={product} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ToyDetailStyles>
  )
}

export default ToyDetailComponent
