import React, { useEffect } from 'react'
import { DashboardStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Box, Typography, IconButton } from '@mui/material'
import { RiUserLine, RiBillLine, RiCoinsLine, RiUploadLine } from 'react-icons/ri'
import { getAllUsers } from '../../redux/apiRequest';
import { createAxios } from '../../utils/createInstance'
import { loginSuccess } from '../../redux/Slice/authSlice'
import { getAllOrders } from '../../pages/cart/orderSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products?.allProducts)
  const currentUser = useSelector(state => state.auth.login?.currentUser)
  const allOrders = useSelector(state => state.orders.orders?.allOrders)
  const allUsers = useSelector(state => state.users.users?.allusers);

  const axiosJWT = createAxios(currentUser, dispatch, loginSuccess);
  const accessTokenUser = currentUser.accessToken

  useEffect(() => {
    getAllUsers(accessTokenUser, dispatch, axiosJWT),
      getAllOrders(dispatch)
  }, [])

  const Square = ({ icon, title, number }) => {
    return (
      <Box className='dbSquare'>
        <Box className='dbheader'>
          <IconButton className='icon' disableRipple>
            {icon}
          </IconButton>
        </Box>
        <Typography className='text'>{number}</Typography>
        <Typography sx={{ opacity: '60%' }}>{title}</Typography>
      </Box>
    )
  }
  return (
    <DashboardStyle>
      <Box className='dbHeader'>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Square icon={<RiCoinsLine color={'#F77A0C'} />} title='Tổng thu nhập' number={'5000 VND'} />
          </Grid>
          <Grid item md={3}>
            <Square icon={<RiBillLine color={'#F77A0C'} />} title='Tổng số đơn hàng' number={allOrders?.length} />
          </Grid>
          <Grid item md={3}>
            <Square icon={<RiUserLine color={'#F77A0C'} />} title='Tổng số người dùng' number={allUsers?.length} />
          </Grid>
          <Grid item md={3}>
            <Square icon={<RiUploadLine color={'#F77A0C'} />} title='Tổng số sản phẩm' number={products?.length} />
          </Grid>
        </Grid>
      </Box>
    </DashboardStyle>
  )
}

export default Dashboard
