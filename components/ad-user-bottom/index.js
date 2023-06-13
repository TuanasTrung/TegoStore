import React, { useState, useEffect } from 'react'
import { Table, Select } from 'antd'
import { Button, Box, Modal, Typography, IconButton, Grid, MenuItem } from '@mui/material'
import { ButtonFunction } from '../table/styles'
import { deleteOrderById, getHistoryCart, updateOrderById } from '../../pages/history-cart/orderSlice'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import { useDispatch, useSelector } from 'react-redux'
import { FormEditStyle } from '../formEditInfor/styles'
import FormProvider from '../hook-form/FormProvider'
import { RiCloseFill } from "react-icons/ri";
import RHFTextField from '../hook-form/RHFTextField'
import RHFSelect from '../hook-form/RHFSelect'
import { useForm, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserBottom = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders.order);
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')

  const validateFields = {

  }

  const [defaultValues, setDefaultValues] = useState({})

  const validateSchema = Yup.object().shape(validateFields)

  // const user = {
  //   _id: router.query.slug
  // }

  useEffect(() => {
    getHistoryCart(router.query.slug, dispatch)
  }, [])

  const handleDetail = (idOrder) => {
    router.push(`/history-cart/${idOrder}`)
  }

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
    console.log(data)
  }

  const handleEdit = (data) => {
    const update = {
      ...data,
      delivery_status: status,
    }
    updateOrderById(data._id, update, dispatch, router.query.slug)
  }

  const handleChange = (value) => {
    setStatus(value)
  }

  const onCloseModal = () => {
    setOpen(false)
  }

  const handleDelete = (id) => {
    deleteOrderById(id)
  }

  const onOk = () => {

  }

  const provinceData = ['Đang xử lý', 'Đang vận chuyển', 'Hoàn thành'];

  return (
    <>
      <Table
        // rowSelection={{
        //   ...rowSelection,
        // }}
        columns={[
          {
            title: 'Mã đơn hàng',
            dataIndex: '_id',
            render: (text) => <span style={{ cursor: 'pointer' }} onClick={() => handleDetail(text)}>{text}</span>,
          },
          {
            title: 'Tổng tiền',
            dataIndex: 'total',
          },
          {
            title: 'Trạng thái',
            dataIndex: 'delivery_status',
            render: (text, index) => (
              <Box>
                <Select
                  defaultValue={text}
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={provinceData.map((province) => ({ label: province, value: province }))}
                />
              </Box>
            )
          },
          {
            title: 'Ngày mua',
            dataIndex: 'createdAt',
            render: (text) => <p>{moment(text).format('DD/MM/YYYY')}</p>
          },
          {
            title: '',
            dataIndex: 'action',
            render: (data, index) => (
              <ButtonFunction>
                <Box width='50%' display={'flex'} justifyContent={'space-between'}>
                  <Button onClick={() => handleEdit(index)} className='btn'>Sửa</Button>
                  <Button onClick={() => handleDelete(index._id)} className='btn'>Xóa</Button>
                </Box>
              </ButtonFunction>
            )
          }
        ]}
        dataSource={orders}
      />
      <Modal
        open={open}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        defaultValues={defaultValues}
        validateFields={validateFields}
      >
        <FormEditStyle>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box className='modal-edit'>
              <Box className="modal-header">
                <Typography>Chỉnh sửa</Typography>
                <IconButton onClick={onCloseModal}>
                  <RiCloseFill />
                </IconButton>
              </Box>
              <Box className='modal-body'>
                <Grid container>
                  <Grid item md={4}>
                    <Typography className='title'>Mã đơn hàng <strong style={{ color: '#E53935' }}>*</strong></Typography>
                  </Grid>
                  <Grid item md={8}>
                    <RHFTextField
                      name="id"
                      iconPosition="end"
                    />
                    {/* <p>mã đơn hàng</p> */}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={4}>
                    <Typography className='title'>Tiền vận chuyển <strong style={{ color: '#E53935' }}>*</strong></Typography>
                  </Grid>
                  <Grid item md={8}>
                    <RHFTextField
                      name="shippingFee"
                      iconPosition="end"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={4}>
                    <Typography className='title'>Tổng tiền <strong style={{ color: '#E53935' }}>*</strong></Typography>
                  </Grid>
                  <Grid item md={8}>
                    <RHFTextField
                      name="Total"
                      iconPosition="end"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={4}>
                    <Typography className='title'>Trạng thái đơn hàng <strong style={{ color: '#E53935' }}>*</strong></Typography>
                  </Grid>
                  <Grid item md={8}>
                    <RHFSelect
                      name='delivery_status'
                    >
                      <MenuItem value={10}>Đang xử lý</MenuItem>
                      <MenuItem value={20}>Đang vận chuyển</MenuItem>
                      <MenuItem value={30}>Hoàn thành</MenuItem>
                    </RHFSelect>
                  </Grid>
                </Grid>
              </Box>
              <Box className='modal-footer'>
                <Button
                  className='btn-cancel'
                  height={36}
                  onClick={onCloseModal}
                >
                  Hủy
                </Button>
                <Button
                  className="btn-ok"
                  onClick={onOk}
                  height={36}
                  type='submit'
                >
                  Cập nhật
                </Button>
              </Box>
            </Box>
          </FormProvider>
        </FormEditStyle>
      </Modal>
    </>
  )
}

export default UserBottom
