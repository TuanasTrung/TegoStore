import React, { useState } from 'react'
import { ProfileStyles } from './styles'
import {
  Box,
  Typography,
  Button,
  Grid,
  Modal,
} from "@mui/material";
import { useSelector } from 'react-redux';
import FormEditInfor from '../formEditInfor';
import * as Yup from 'yup'

const ProfileComponent = () => {
  const user = useSelector(state => state.auth.login?.currentUser)
  const [openFormEdit, setOpenFormEdit] = useState(false);
  const handleOpenFormEdit = () => {
    setOpenFormEdit(true)
  }
  const handleClose = () => setOpenFormEdit(false);

  return (
    <>
      <ProfileStyles>
        <Box className="header-box">
          <text className="before"></text>
          <Typography className="title-infor">Thông tin cá nhân</Typography>
          <Button className="edit" onClick={handleOpenFormEdit}>
            Chỉnh sửa
          </Button>
        </Box>

        <Box className="body-box">
          <Grid container sx={{ padding: "0 0 16px 0" }}>
            <Grid item md={12} className="gridItem-user">
              <Box className="name-phoneNumber">
                <Typography component="p">{user?.username}</Typography>
                <Typography component="span">{user?.phoneNumber}</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container className="grid-container">
            <Grid item md={6} className="grid-items">
              <Typography className="form-title">Email: </Typography>
              <Typography className="form-content">
                {user?.email}
              </Typography>
            </Grid>
            <Grid item md={6} className="grid-items">
              <Typography className="form-title">Số điện thoại: </Typography>
              <Typography className="form-content">
                {user?.phoneNumber}
              </Typography>
            </Grid>
          </Grid>

          <Grid container className="grid-container">
            <Grid item md={12} className="grid-items">
              <Typography className="form-title">
                Địa chỉ nơi ở hiện tại:{" "}
              </Typography>
              <Typography className="form-content">
                {user?.address}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ProfileStyles>

      <Modal
        open={openFormEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormEditInfor
          title={'Chỉnh sửa thông tin'}
          onCloseModal={handleClose}
          setOpenFormEdit={setOpenFormEdit}
          okText='Lưu'
          user={user}
          validateFields={{
            username: Yup.string().required('Vui lòng nhập tên'),
            phoneNumber: Yup.lazy(value => {
              if (value !== (undefined || null || '')) {
                return Yup.number().typeError('Số điện thoại phải là chữ số')
              } else {
                return Yup.string().required('Vui lòng nhập số điện thoại');
              }
            }),
            address: Yup.string().required('Vui lòng nhập địa chỉ'),
            email: Yup.string().email('Email không đúng định dạng').required('Vui lòng nhập email'),
          }}
          defaultValues={{
            username: user?.username,
            phoneNumber: user?.phoneNumber,
            email: user?.email,
            address: user?.address
          }}
        />
      </Modal>
    </>
  )
}

export default ProfileComponent
