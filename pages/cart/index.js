import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, Grid, IconButton, Button, Divider } from '@mui/material'
import { MainContainer } from '../../components/layouts/style'
import { CartStyles } from './styles'
import { RiDeleteBinLine, RiSubtractLine, RiAddLine, RiMapPinLine } from "react-icons/ri";
import Page from '../../components/Page';
import { decreaseCart, addToCart, removeFromCart } from '../../redux/Slice/cartSlice'

const MyCart = () => {
  const dispatch = useDispatch();
  const [temporaryTotal, setTemporaryTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(10000)
  const totalBill = temporaryTotal + shippingFee

  const items = useSelector(state => state.cart?.cartItems);
  const user = useSelector(state => state.auth.login?.currentUser)

  useEffect(() => {
    let firstProduct = 0;
    for (let i = 0; i < items.length; i++) {
      const totalProduct = items[i].price * items[i].cartQuantity;
      firstProduct += totalProduct
    }
    setTemporaryTotal(firstProduct)
    if (temporaryTotal !== 0) {
      setShippingFee(20000)
    }
  }, [items])

  const handleMinusQuantity = (product) => {
    dispatch(decreaseCart(product));
  }

  const handlePlusQuantity = (product) => {
    dispatch(addToCart(product));
  }

  const handleDeleteProduct = (product) => {
    dispatch(removeFromCart(product))
  }

  const handlePaymentBill = () => {

  }
  
  return (
    <Page title='Giỏ hàng'>
      <MainContainer>
        <CartStyles>
          <Box className='my-cart'>
            <Typography>GIỎ HÀNG</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item md={8}>
              {items.map(prd => (
                <Box className='cart-product' key={prd._id}>
                  <Box className='product-information'>
                    <Box className='product-img'>
                      <img src={prd?.image} />
                    </Box>
                    <Box className='product-text'>
                      <Box className='line-1'>
                        <Box>
                          <Typography className='title'>{prd?.name}</Typography>
                        </Box>
                        <IconButton onClick={() => handleDeleteProduct(prd)}>
                          <RiDeleteBinLine />
                        </IconButton>
                      </Box>
                      <Box className='line-2'>
                        <Box className='price'>{prd?.price} VND</Box>
                        <Box className='change-quantity'>
                          <Button className='minus' onClick={() => handleMinusQuantity(prd)} disabled={prd?.cartQuantity === 0}>
                            <RiSubtractLine color='#000' size={23} />
                          </Button>
                          <Box className='number'>{prd?.cartQuantity}</Box>
                          <Button className='plus' onClick={() => handlePlusQuantity(prd)} disabled={prd?.cartQuantity === prd?.quantity}>
                            <RiAddLine color='#000' size={23} />
                          </Button>
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
                  <Grid container>
                    <Grid item md={8}>
                      <Typography>Tạm tính ( {items.length} sản phẩm )</Typography>
                    </Grid>
                    <Grid item md={4} display={'flex'} justifyContent={'end'}>
                      {temporaryTotal} VND
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={8}>
                      <Typography>Phí giao hàng</Typography>
                    </Grid>
                    <Grid item md={4} display={'flex'} justifyContent={'end'}>
                      {shippingFee} VND
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={8}>
                      <Typography sx={{ color: 'black', fontWeight: 600 }}>Tổng tiền </Typography>
                    </Grid>
                    <Grid item md={4} display={'flex'} justifyContent={'end'} style={{ color: 'black', fontWeight: 600 }}>
                      {totalBill} VND
                    </Grid>
                  </Grid>
                  <Box>
                    <Button className='button' onClick={() => handlePaymentBill}>THANH TOÁN</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CartStyles>
      </MainContainer>
    </Page>
  )
}

export default MyCart
