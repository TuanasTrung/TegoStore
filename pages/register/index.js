import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import RegisterForm from '../../components/authen/register/RegisterForm'
import { FormStyle } from '../../assets/styles/authStyle'
import Page from '../../components/Page'

const Register = () => {
  return (
    <Page title='Đăng ký'>
      <FormStyle>
        <Box className='form-style'>
          <Box height={'50px'} width={'170px'} mb={2}>
            <img src={'/assets/logo.png'} style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box>
            <Typography>ĐĂNG KÝ</Typography>
          </Box>
          <RegisterForm />
        </Box>
      </FormStyle>
    </Page>
  )
}

export default Register
