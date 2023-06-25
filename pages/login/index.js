import React from 'react'
import { Box, Typography } from '@mui/material'
import LoginForm from '../../components/authen/login/LoginForm'
import { FormStyle } from '../../assets/styles/authStyle'
import Page from '../../components/Page'
import Link from 'next/link'

const Login = () => {
  return (
    <Page title='Đăng nhập'>
      <FormStyle>
        <Box className='form-style'>
          <Box height={'50px'} width={'170px'} mb={2}>
            <img src={'/assets/logo.png'} style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box>
            <Typography>LOGIN</Typography>
          </Box>
          <LoginForm />
        </Box>
        <Box mt={2}>
          <span>Nếu bạn chưa có tài khoản? </span>
          <Link href='/register' style={{ color: '#F77A0C' }}>
            <span>Đăng ký tại đây</span>
          </Link>
        </Box>
      </FormStyle>
    </Page>
  )
}

export default Login
