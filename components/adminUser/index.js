import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { Box, Button, Modal } from '@mui/material'
import { AUS } from './styles'
import { ButtonFunction } from '../table/styles'
import FormEditInfor from '../formEditInfor'
import * as Yup from 'yup'
import { deleteUser } from '../../redux/apiRequest'
import Router, { useRouter } from 'next/router'

const AdminUser = ({ data }) => {
  const [users, setUsers] = useState([])
  const router = useRouter();
  const showData = data

  useEffect(() => {
    setUsers(showData);
  }, [showData])

  const handleDelete = (id) => {
    deleteUser(id)
  }

  const handleDetail = (slug) => {
    router.push(`/admin/user/${slug._id}`)
  }

  return (
    <AUS>
      <Table
        // rowSelection={{
        //   ...rowSelection,
        // }}
        columns={[
          {
            title: 'Tên',
            dataIndex: 'username',
            render: (text, index) => <span style={{ cursor: 'pointer' }} onClick={() => handleDetail(index)}>{text}</span>,
          },
          {
            title: 'Số điện thoại',
            dataIndex: 'phoneNumber',
          },
          {
            title: 'Email',
            dataIndex: 'email',
          },
          {
            title: 'Địa chỉ',
            dataIndex: 'address',
          },
          {
            title: '',
            dataIndex: 'action',
            render: (data, index) => (
              <ButtonFunction>
                {/* <Button onClick={() => handleEdit(index)} className='btn'>Sửa</Button> */}
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

export default AdminUser
