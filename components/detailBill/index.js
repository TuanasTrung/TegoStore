import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid, IconButton, Button, Divider } from '@mui/material'
import { CartStyles } from '../../pages/cart/styles'
import { RiDeleteBinLine, RiSubtractLine, RiAddLine, RiMapPinLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const DetailBill = () => {
  const router = useRouter();
  const orders = useSelector(state => state.orders.orders?.allOrders)
  const user = useSelector(state => state.auth.login?.currentUser)
  const [order, setOrder] = useState({})
  const [products, setProducts] = useState([])

  useEffect(() => {
    for (let i = 0; i < orders?.length; i++) {
      if (orders[i]._id === router.query.slug) {
        setOrder(orders[i])
        setProducts(orders[i].products)
        return
      }
    }
  }, [])
  
  return (
    <CartStyles>
      <Box className='my-cart'>
        <Typography>GIỎ HÀNG</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={8}>
          {products.map(prd => (
            <Box className='cart-product' key={prd._id}>
              <Box className='product-information'>
                <Box className='product-img'>
                  <img src={prd?.productImage} />
                </Box>
                <Box className='product-text'>
                  <Box className='line-1'>
                    <Box>
                      <Typography className='title'>{prd?.productName}</Typography>
                    </Box>
                  </Box>
                  <Box className='line-2'>
                    <Box className='price'>{prd?.productPrice} VND</Box>
                    <Box className='change-quantity'>
                      <Box className='number'>{prd?.cartQuantity}</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item md={4}>
          <Box className='cart-payment'>
            <Box className='cart-location'>
              <Typography>Địa chỉ</Typography>
              <Box display='flex' alignItems={'center'}>
                <RiMapPinLine style={{ marginRight: '10px' }} />
                <Typography>{user?.address}</Typography>
              </Box>
            </Box>
            <Divider />
            <Box className='cart-information'>
              <Typography>THÔNG TIN ĐƠN HÀNG</Typography>
              {/* <Grid container>
                <Grid item md={8}>
                  <Typography>Tạm tính ( {products.length} sản phẩm )</Typography>
                </Grid>
                <Grid item md={4} display={'flex'} justifyContent={'end'}>
                  {products?.total} VND
                </Grid>
              </Grid> */}
              <Grid container>
                <Grid item md={8}>
                  <Typography>Trạng thái </Typography>
                </Grid>
                <Grid item md={4} display={'flex'} justifyContent={'end'} style={{ fontWeight: 600 }}>
                  {order?.delivery_status}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={8}>
                  <Typography>Phí giao hàng</Typography>
                </Grid>
                <Grid item md={4} display={'flex'} justifyContent={'end'}>
                  {order?.shippingFee} VND
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={8}>
                  <Typography sx={{ color: 'black', fontWeight: 600 }}>Tổng tiền </Typography>
                </Grid>
                <Grid item md={4} display={'flex'} justifyContent={'end'} style={{ color: 'black', fontWeight: 600 }}>
                  {order?.total} VND
                </Grid>
              </Grid>
              {/* <Box>
                <Button className='button' onClick={handlePaymentBill}>THANH TOÁN</Button>
              </Box> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </CartStyles>
  )
}

export default DetailBill
