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
          <Box>
            <Typography>LOGIN</Typography>
          </Box>
          <Box>
            logo
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
