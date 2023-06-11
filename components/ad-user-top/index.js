import React from 'react'
import { Grid } from '@mui/material'
import { TopStyles } from './styles'

const UserTop = ({ data }) => {
  const information = [
    {
      title: 'Tên:',
      text: data?.username
    },
    {
      title: 'Email:',
      text: data?.email
    },
    {
      title: 'Số điện thoại:',
      text: data?.phoneNumber
    },
    {
      title: 'Địa chỉ:',
      text: data?.address
    },
  ]
  return (
    <TopStyles>
      {information.map(infor => (
        <Grid container>
          <Grid item md={6}>
            {infor.title}
          </Grid>
          <Grid item md={6} sx={{ fontWeight: 600, letterSpacing: '1.05px' }}>
            {infor.text}
          </Grid>
        </Grid>
      ))}
    </TopStyles>
  )
}

export default UserTop
