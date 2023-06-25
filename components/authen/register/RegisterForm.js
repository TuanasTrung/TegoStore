import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { FormProvider, RHFTextField } from '../../hook-form'
import { useForm } from 'react-hook-form'
import { RegisterFormStyle } from './styles'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RiAtLine, RiLock2Line, RiHome2Line, RiPhoneLine, RiUser3Line } from "react-icons/ri";
import { Box, Stack, IconButton, Button } from '@mui/material'
import { registerUser } from '../../../redux/apiRequest'


const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required('Username không được để trống'),
    email: Yup.string().email('Email sai định dạng').required('Email không được để trống'),
    password: Yup.string()
      .min(5, 'Mật khẩu cần tối thiểu 5 ký tự')
      .required("Mật khẩu không được bỏ trống"),
    phoneNumber: Yup.string('Số điện thoại phải là số').required('Số điện thoại không được để trống'),
    address: Yup.string().required('Địa chỉ không được để trống')
  });

  const defaultValues = {
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    username: '',
  }

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmiting },
  } = methods

  const onSubmit = (data) => {
    registerUser(data, dispatch, router.push)
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RegisterFormStyle>
        <Box className='login-form'>
          <Stack spacing={3}>
            <Box className='input-field'>
              <IconButton disableRipple>
                <RiAtLine />
              </IconButton>
              <RHFTextField
                name='email'
                label='Email'
                required
              />
            </Box>

            <Box className='input-field'>
              <IconButton disableRipple>
                <RiUser3Line />
              </IconButton>
              <RHFTextField
                name='username'
                label='Tên người dùng'
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

            <Box className='input-field'>
              <IconButton disableRipple>
                <RiPhoneLine />
              </IconButton>
              <RHFTextField
                name='phoneNumber'
                label='Số điện thoại'
                required
              />
            </Box>

            <Box className='input-field'>
              <IconButton disableRipple>
                <RiHome2Line />
              </IconButton>
              <RHFTextField
                name='address'
                label='Địa chỉ'
                required
              />
            </Box>

          </Stack>
          <Button
            type='submit'
            className='button-form'
          >
            Đăng ký
          </Button>
        </Box>
      </RegisterFormStyle>
    </FormProvider>
  )
}

export default RegisterForm
