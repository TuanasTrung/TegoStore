import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { Box, Button, Modal } from '@mui/material'
import { AUS } from '../adminUser/styles'
import { ButtonFunction } from '../table/styles'
import FormEditInfor from '../formEditInfor'
import * as Yup from 'yup'
import { deleteUser } from '../../redux/apiRequest'
import { useRouter } from 'next/router'

const styles = {
  width: '50px',
  height: '50px'
}

const buttonSx = {
  border: '1px solid #F77A0C',
  backgroundColor: '#F77A0C',
  color: 'white',
  marginBottom: '20px',
  '&:hover': {
    color: '#F77A0C',
    backgroundColor: 'white'
  }
}

const AdminProduct = ({ data }) => {
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
    router.push(`/admin/product/${slug}`)
  }

  return (
    <AUS>
      <Box display={'flex'} justifyContent={'end'} width={'96.5%'}>
        <Button sx={buttonSx}>Thêm</Button>
      </Box>
      <Table
        // rowSelection={{
        //   ...rowSelection,
        // }}
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
        dataSource={users}
      />
    </AUS>
  )
}

export default AdminProduct
