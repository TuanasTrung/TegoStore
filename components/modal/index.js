import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/apiRequest';
import { Box, Typography, IconButton, Button, Grid } from '@mui/material';
import { RiCloseCircleLine } from 'react-icons/ri'
import { ModalStyles } from './styles';
import Link from 'next/link';

const ModalPutBag = ({ handleClose, idProduct }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product?.product)

  React.useEffect(() => {
    getProductById(idProduct, dispatch)
  }, [])

  return (
    <ModalStyles>
      <Box display='flex' justifyContent='space-between' alignItems='center' flex='1'>
        <Box>
          <Typography>ĐÃ THÊM VÀO GIỎ HÀNG</Typography>
        </Box>
        <IconButton onClick={handleClose}>
          <RiCloseCircleLine />
        </IconButton>
      </Box>
      <Box className='box-product'>
        <Box className='box-image'>
          <img src={product?.image} />
        </Box>
        <Box className='box-information'>
          <Typography className='title'>{product?.name}</Typography>
          <Typography className='price'>{product?.price} VND</Typography>
          <Typography className='quantity'>quantity: 1 </Typography>
        </Box>
      </Box>
      <Box className='box-footer' >
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Button className='btn-back' onClick={handleClose}>
              Tiếp tục xem sản phẩm
            </Button>
          </Grid>
          <Grid item md={6}>
            <Link href={'/cart'}>
              <Button className='btn-cart'>
                Đi đến giỏ hàng
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </ModalStyles>
  )
}

export default ModalPutBag
