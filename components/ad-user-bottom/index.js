import React, { useEffect } from 'react'
import { Table } from 'antd'
import { Button, Box } from '@mui/material'
import { ButtonFunction } from '../table/styles'
import { deleteOrderById, getHistoryCart } from '../../pages/history-cart/orderSlice'
import { useRouter } from 'next/router'
import moment from 'moment/moment'
import { useDispatch, useSelector } from 'react-redux'

const UserBottom = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders.order)

  const user = {
    _id: router.query.slug
  }

  useEffect(() => {
    getHistoryCart(user, dispatch)
  }, [])

  const handleDetail = (idOrder) => {
    router.push(`/history-cart/${idOrder}`)
  }

  const handleEdit = () => {

  }

  const handleDelete = (id) => {
    deleteOrderById(id)
  }

  return (
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
  )
}

export default UserBottom
