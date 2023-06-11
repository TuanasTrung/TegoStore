import React from 'react'
import { Box, Typography, Grid, IconButton, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../redux/Slice/authSlice'
import RHFTextField from '../hook-form/RHFTextField'
import { FormEditStyle } from './styles'
import { RiCloseFill } from "react-icons/ri";
import FormProvider from '../hook-form/FormProvider'
import { useForm, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { updateUser } from '../../redux/apiRequest';
import { createAxios } from '../../utils/createInstance';


const FormEditInfor = ({
  title,
  onCloseModal,
  onOk,
  cancelText = 'Hủy',
  okText = 'Xác nhận',
  user,
  validateFields = {},
  defaultValues = {},
  setOpenFormEdit,
}) => {
  const dispatch = useDispatch();
  const axiosJWT = createAxios(user, dispatch, loginSuccess);
  const validateSchema = Yup.object().shape(validateFields)

  const methods = useForm({
    resolver: yupResolver(validateSchema),
    mode: 'onChange',
    defaultValues: React.useMemo(() => { return defaultValues }, [defaultValues]),
  });

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = (data) => {
    const update = {
      _id: user?._id,
      ...data
    }
    console.log('data: ', update)
    console.log('data: ', user?._id)
    updateUser(dispatch, update, axiosJWT)
    setOpenFormEdit(false)
  }
  return (
    <FormEditStyle>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box className='modal-edit'>
          <Box className="modal-header">
            <Typography>{title}</Typography>
            <IconButton onClick={onCloseModal}>
              <RiCloseFill />
            </IconButton>
          </Box>

          <Box className='modal-body'>
            <Grid container>
              <Grid item md={4}>
                <Typography className='title'>Họ tên <strong style={{ color: '#E53935' }}>*</strong></Typography>
              </Grid>
              <Grid item md={8}>
                <RHFTextField
                  name="username"
                  iconPosition="end"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={4}>
                <Typography className='title'>Sô điện thoại <strong style={{ color: '#E53935' }}>*</strong></Typography>
              </Grid>
              <Grid item md={8}>
                <RHFTextField
                  name="phoneNumber"
                  iconPosition="end"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={4}>
                <Typography className='title'>Email <strong style={{ color: '#E53935' }}>*</strong></Typography>
              </Grid>
              <Grid item md={8}>
                <RHFTextField
                  name="email"
                  iconPosition="end"
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={4}>
                <Typography className='title'>Địa chỉ <strong style={{ color: '#E53935' }}>*</strong></Typography>
              </Grid>
              <Grid item md={8}>
                <RHFTextField
                  name="address"
                  iconPosition="end"
                />
              </Grid>
            </Grid>
          </Box>

          <Box className='modal-footer'>
            <Button
              className='btn-cancel'
              height={36}
              onClick={onCloseModal}
            >
              {cancelText}
            </Button>
            <Button
              className="btn-ok"
              onClick={onOk}
              height={36}
              type='submit'
            >
              {okText}
            </Button>
          </Box>
        </Box>
      </FormProvider>
    </FormEditStyle>
  )
}

export default FormEditInfor
