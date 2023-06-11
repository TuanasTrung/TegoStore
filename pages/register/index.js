import React from 'react'
import { Box, Typography } from '@mui/material'
import RegisterForm from '../../components/authen/register/RegisterForm'
import { FormStyle } from '../../assets/styles/authStyle'
import Page from '../../components/Page'

const Register = () => {
  return (
    <Page title='Đăng ký'>
    <FormStyle>
      <Box className='form-style'>
        <Box>
          <Typography>REGISTER</Typography>
        </Box>
        <Box>
          logo
        </Box>
        <RegisterForm />
      </Box>
    </FormStyle>
    </Page>
  )
}

export default Register
