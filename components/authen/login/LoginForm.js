import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormStyle } from './styles'
import { RiAtLine, RiLock2Line } from "react-icons/ri";
import { Box, Button, IconButton, Stack } from '@mui/material'
import { FormProvider, RHFTextField } from '../../hook-form'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../../redux/apiRequest'
// import useAuth from '../../../hook/useAuth'

const LoginForm = () => {
  // const { login } = useAuth();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirectPath = '/', } = router.query;
  const user = useSelector(state => state.auth.login.currentUser)

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username không được để trống'),
    password: Yup.string()
      .min(6, 'Mật khẩu cần tối thiểu 6 ký tự')
      .required("Mật khẩu không được bỏ trống"),
  });

  const defaultValues = {
    username: '',
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
    formState: { errors, isValid, isSubmiting },
    watch,
  } = methods;

  const onSubmit = async (data) => {
    // const userLogin = {
    //   username: data.username,
    //   password: data.password,
    // };
    // console.log('userLogin: ', userLogin)
    // console.log('data: ', data)

    try {
      await loginUser(data, dispatch, router.push)
      enqueueSnackbar('Đăng nhập thành công')
    } catch (error) {
      console.log(error)
    }

    // try {
    //   await login(data.email, data.password);
    //   enqueueSnackbar('Đăng nhập thành công!');

    //   // redirectPath ? router.push(redirectPath) : router.push('/');
    // } catch (error) {
    //   enqueueSnackbar('Đăng nhập thất bại !!')
    // }
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <LoginFormStyle>
        <Box className='login-form'>
          <Stack spacing={3}>
            <Box className='input-field'>
              <IconButton disableRipple>
                <RiAtLine />
              </IconButton>
              <RHFTextField
                name='username'
                label='Username'
                required
              />
            </Box>

            <Box className='input-field'>
              <IconButton disableRipple>
                <RiLock2Line />
              </IconButton>
              <RHFTextField
                name='password'
                label='Mật khẩu'
                type='password'
                required
              />
            </Box>
          </Stack>
          <Button
            type='submit'
            className='button-form'
          >
            Đăng nhập
          </Button>
        </Box>
      </LoginFormStyle>
    </FormProvider>
  )
}

export default LoginForm
