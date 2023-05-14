import React from 'react'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormStyle } from './styles'
import { Box, Button, Stack } from '@mui/material'
import { FormProvider, RHFTextField } from '../../hook-form'
import { useForm } from 'react-hook-form'

const LoginForm = () => {

  const router = useRouter();
  const { redirectPath = '/home', userName: rqUserName = '' } = router.query;

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email sai định dạng').required('Email không được để trống'),
    password: Yup.string()
      .min(6, 'Mật khẩu cần tối thiểu 6 ký tự')
      .required("Mật khẩu không được bỏ trống"),
  });

  const defaultValues = {
    email: '',
    password: "",
  };

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    setError,
    handleSubmit,
    formState: { errors, isValid, isSumitting },
    watch,
  } = methods;

  const onSubmit = (data) => {
    console.log('data: ', data)
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <LoginFormStyle>
        <Box className='login-form'>
          <Stack spacing={3}>
            <RHFTextField
              name='email'
              label='Email' 
            />

            <RHFTextField
              name='password'
              label='Mật khẩu'
              type='password'
            />
          </Stack>

          <Button
            type='submit'>
            Đăng nhập
          </Button>
        </Box>
      </LoginFormStyle>
    </FormProvider>
  )
}

export default LoginForm
