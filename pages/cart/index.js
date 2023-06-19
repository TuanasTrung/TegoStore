import React, { useEffect, useState, useRef } from 'react'
import { insertOrder } from './orderSlice'
import { createAxios } from '../../utils/createInstance'
import { loginSuccess } from '../../redux/Slice/authSlice'
import { DOMAIN_SERVER_API } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, Grid, IconButton, Button, Divider } from '@mui/material'
import { Radio } from 'antd'
import { MainContainer } from '../../components/layouts/style'
import { CartStyles } from './styles'
import { RiDeleteBinLine, RiSubtractLine, RiAddLine, RiMapPinLine } from "react-icons/ri";
import Page from '../../components/Page';
import { decreaseCart, addToCart, removeFromCart, clearCart } from '../../redux/Slice/cartSlice'
import { useRouter } from 'next/router'
import { EditProduct } from '../../redux/apiRequest'

const MyCart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const items = useSelector(state => state.cart?.cartItems);
  const user = useSelector(state => state.auth.login?.currentUser);
  const products = useSelector(state => state.products.products?.allProducts);
  const accessToken = user?.accessToken;
  const reff = useRef(false)

  const axiosJWT = createAxios(user, dispatch, loginSuccess)
  const [temporaryTotal, setTemporaryTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const totalBill = temporaryTotal + shippingFee;
  const [radioBtn, setRadioBtn] = useState('Tiền mặt')

  const onChange = (e) => {
    setRadioBtn(e.target.value)
  }

  useEffect(() => {
    let firstProduct = 0;
    for (let i = 0; i < items.length; i++) {
      const totalProduct = items[i].price * items[i].cartQuantity;
      firstProduct += totalProduct
    }
    setTemporaryTotal(firstProduct)
    if (firstProduct !== 0) {
      setShippingFee(20000)
    }
  }, [items, reff])

  useEffect(() => {
    !user?._id && router.push('/login')
  })

  const handleMinusQuantity = (product) => {
    dispatch(decreaseCart(product));
  }

  const handlePlusQuantity = (product) => {
    dispatch(addToCart(product));
  }

  const handleDeleteProduct = (product) => {
    dispatch(removeFromCart(product))
  }

  const handlePaymentBill = async () => {
    const resProducts = await items.map((item) => ({
      productId: item._id,
      productName: item.name,
      productPrice: item.price,
      productImage: item.image,
      cartQuantity: item.cartQuantity,
    }))
    const bill = {
      userId: user?._id,
      products: resProducts,
      shippingFee: shippingFee,
      total: totalBill,
      payment_status: radioBtn,
    }
    console.log(bill)
    await insertOrder(bill, router.push, accessToken, axiosJWT);
    for (let i = 0; i < resProducts.length; i++) {
      const found = products.find(({ _id }) => _id === resProducts[i].productId)
      await EditProduct(dispatch, resProducts[i].productId, { quantity: found.quantity - resProducts[i].cartQuantity })
    }
    dispatch(clearCart());
    reff.current = true
  }

  return (
    // <>
    //   {user?._id ? (
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
                  <Grid container mb={2}>
                    <Grid item md={8}>
                      <Typography sx={{ color: 'black', fontWeight: 600 }}>Tổng tiền </Typography>
                    </Grid>
                    <Grid item md={4} display={'flex'} justifyContent={'end'} style={{ color: 'black', fontWeight: 600 }}>
                      {totalBill} VND
                    </Grid>
                  </Grid>
                  <Radio.Group onChange={onChange} defaultValue={'Tiền mặt'}>
                    <Radio.Button value={'Tiền mặt'}>Tiền mặt</Radio.Button>
                    <Radio.Button value={'Chuyển khoản'}>Chuyển khoản</Radio.Button>
                    <Radio.Button value={'Visa'}>Visa</Radio.Button>
                  </Radio.Group>
                  <Box mt={3}>
                    <Button className='button' onClick={handlePaymentBill}>ĐẶT HÀNG</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CartStyles>
      </MainContainer>
    </Page>
    // ) : (
    //   router.push('/login')
    // )}
    // </>
  )
}

export default MyCart
