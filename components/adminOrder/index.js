import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { Box, Button, Modal } from '@mui/material'
import { AUS } from '../adminUser/styles'
import { ButtonFunction } from '../table/styles'
import FormEditInfor from '../formEditInfor'
import * as Yup from 'yup'
import { deleteUser } from '../../redux/apiRequest'
import { useRouter } from 'next/router'
import moment from 'moment/moment'

const AdminOrder = ({ data }) => {
  const [users, setUsers] = useState([])
  const router = useRouter();
  const showData = data

  useEffect(() => {
    setUsers(showData);
  }, [showData])

  const handleDelete = (id) => {
    deleteUser(id)
  }
  const handleEdit = () => {

  }

  const handleDetail = (slug) => {
    router.push(`/admin/order/${slug}`)
  }

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
            title: 'Trạng thái',
            dataIndex: 'delivery_status',
          },
          {
            title: 'Ngày mua',
            dataIndex: 'createdAt',
            render: (text) => <p>{moment(text).subtract(-1, "days").format('DD/MM/YYYY')}</p>
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
        dataSource={users}
      />
    </AUS>
  )
}

export default AdminOrder
