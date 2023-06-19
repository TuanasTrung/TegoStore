import React, { useState, useRef, useEffect } from 'react'
import { ToyDetailStyles } from './styles'
import { RiAddLine, RiSubtractLine, RiErrorWarningLine } from "react-icons/ri";
import { Box, Grid, Typography, Button, Tooltip, IconButton, Rating } from '@mui/material'
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
            <Rating value={product?.rating} readOnly />
            <Box mt={2} mb={2}>
              Số lượng: <span style={{fontWeight: 600}}>{product?.quantity}</span>
            </Box>
            <Typography className='detail-price'>{product?.price} VND</Typography>
            <Typography className='detail-status'>{product?.status}</Typography>
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
