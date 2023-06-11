import React, { useEffect } from 'react'
import Page from '../../components/Page';
import { MainContainer } from '../../components/layouts/style';
import { Snackbar, Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import AdminComponent from '../../components/admin';

const AdminPage = () => {
  const user = useSelector(state => state.auth.login?.currentUser)
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (!user.admin) {
      router.push('/404')
      setOpen(true)
    }
  }, [])

  const handleClose = (event, reason) => {
    if (reason === ' clickaway') {
      return;
    }

    setOpen(false);
  }
  return (
    <Page title='Trang admin'>
      <MainContainer>
        <AdminComponent />
      </MainContainer>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="error">
          Không có quyền truy cập trang này
        </Alert>
      </Snackbar>
    </Page>
  )
}

export default AdminPage
