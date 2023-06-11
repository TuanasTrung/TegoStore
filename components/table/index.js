import React from 'react'
import { Table } from 'antd';
import { Box, Button } from '@mui/material';
import { TableStyle, ButtonFunction } from './styles';
import { deleteOrderById } from '../../pages/history-cart/orderSlice';
import { useRouter } from 'next/router';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const TableAntd = ({ orders }) => {
  const data = orders;
  const router = useRouter();

  const handleDelete = (id) => {
    deleteOrderById(id)
  }

  const handleDetail = (id) => {
    router.push(`/history-cart/${id}`)
  }
  return (
    <TableStyle>
      <Table
        // rowSelection={{
        //   ...rowSelection,
        // }}
        columns={[
          {
            title: 'Hóa đơn',
            dataIndex: '_id',
            render: (text) => <span style={{ cursor: 'pointer' }} onClick={() => handleDetail(text)}>{text}</span>,
          },
          {
            title: 'Phí vận chuyển',
            dataIndex: 'shippingFee',
          },
          {
            title: 'Tổng hóa đơn',
            dataIndex: 'total',
          },
          {
            title: '',
            dataIndex: 'action',
            render: (data, index) => (
              <ButtonFunction>
                {/* <Button onClick={() => handleEdit(index._id)} className='edit'>Sửa</Button> */}
                <Button onClick={() => handleDelete(index._id)} className='delete'>Xóa</Button>
              </ButtonFunction>
            )
          }
        ]}
        dataSource={data}
      />
    </TableStyle>
  )
}


export default TableAntd
