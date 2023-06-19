import React, { useEffect, useState } from 'react'
import { Table, Select } from 'antd'
import { Box, Button, IconButton, Modal, Typography, Grid } from '@mui/material'
import { AUS } from '../adminUser/styles'
import { ButtonFunction } from '../table/styles'
import FormEditInfor from '../formEditInfor'
import * as Yup from 'yup'
import { deleteUser } from '../../redux/apiRequest'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import { FormEditStyle } from '../formEditInfor/styles'
import FormProvider from '../hook-form/FormProvider'
import { RiCloseFill } from 'react-icons/ri'
import { useForm, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import RHFTextField from '../hook-form/RHFTextField'
import { deleteOrderById, updateOrderById } from '../../pages/history-cart/orderSlice'
import { useDispatch } from 'react-redux'

const styles = {
  width: '50px',
  height: '50px'
}

const AdminOrder = ({ data }) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('')
  const router = useRouter();
  const showData = data;

  const validateFields = {};

  const defaultValues = {};

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

  useEffect(() => {
    setUsers(showData);
  }, [showData]);

  const handleDelete = (id) => {
    // deleteUser(id);
    deleteOrderById(id)
  };

  const handleChange = (value) => {
    setStatus(value)
  }

  const handleEdit = (data) => {
    const update = {
      ...data,
      delivery_status: status,
    }
    updateOrderById(data._id, update, dispatch, data.userId)
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const handleDetail = (slug) => {
    router.push(`/history-cart/${slug}`);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const provinceData = ['Đang xử lý', 'Đang vận chuyển', 'Hoàn thành'];

  return (
    <AUS>
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
            title: 'Phương thức thanh toán',
            dataIndex: 'payment_status',
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
              <ButtonFunction style={{width: '100%'}}>
                <Button onClick={() => handleEdit(index)} className='btn'>Cập nhật</Button>
                <Button onClick={() => handleDelete(index._id)} className='btn'>Xóa</Button>
              </ButtonFunction>
            )
          }
        ]}
        dataSource={users}
      />
      <Modal
        open={open}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        defaultValues={defaultValues}
        validateFields={validateFields}
      >
        <FormEditStyle style={{width: '720px'}}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box className='modal-edit'>
              <Box className="modal-header">
                <Typography>Chỉnh sửa</Typography>
                <IconButton onClick={onCloseModal}>
                  <RiCloseFill />
                </IconButton>
              </Box>
              <Box className='modal-body'>
                <p style={{fontWeight: 600}}>
                  Các sản phẩm
                </p>
                <Table
                  columns={[
                    {
                      title: 'Hình ảnh',
                      dataIndex: 'image',
                      render: (text) => <img style={styles} src={text} />
                    },
                    {
                      title: 'Mã sản phẩm',
                      dataIndex: '_id',
                      render: (text) => <span style={{ cursor: 'pointer' }} onClick={() => handleDetail(text)}>{text}</span>,
                    },
                    {
                      title: 'Tên',
                      dataIndex: 'name',
                    },
                    {
                      title: 'Số lượng',
                      dataIndex: 'quantity',
                    },
                    {
                      title: 'Giá tiền',
                      dataIndex: 'price',
                    },
                    {
                      title: '',
                      dataIndex: 'action',
                      render: (data, index) => (
                        <ButtonFunction>
                          <Button onClick={() => handleEdit(index)} className='btn'>Sửa</Button>
                          <Button onClick={() => handleDelete(index._id)} className='btn'>Xóa</Button>
                        </ButtonFunction>
                      )
                    }
                  ]}
                  dataSource={[]}
                />
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
    </AUS>
  )
}

export default AdminOrder
