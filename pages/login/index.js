import React from 'react'
import { Box, Typography } from '@mui/material'
import LoginForm from '../../components/authen/login/LoginForm'
import { FormStyle } from '../../assets/styles/authStyle'

const Login = () => {
  return (
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
    </FormStyle>
  )
}

export default Login
