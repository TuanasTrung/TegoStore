import React, { useEffect } from 'react'
import Page from '../../../components/Page'
import { MainContainer } from '../../../components/layouts/style'
import { Box, Grid } from '@mui/material'
import UserTop from '../../../components/ad-user-top'
import UserBottom from '../../../components/ad-user-bottom'
import { getUserById } from '../../../redux/apiRequest'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { createAxios } from '../../../utils/createInstance'
import { loginSuccess } from '../../../redux/Slice/authSlice'

const UserSlugByAdmin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.login?.currentUser)
  const id = router.query.slug;
  const axiosJWT = createAxios(user, dispatch, loginSuccess)
  const userById = useSelector(state => state.users.users?.userbyId)

  useEffect(() => {
    getUserById(id, user?.accessToken, dispatch, axiosJWT)
  }, [])
  return (
    <Page title='Trang thông tin người dùng'>
      <MainContainer>
        <UserTop data={userById} />
        <p style={{ fontWeight: 600, marginBottom: '20px' }}>
          Lịch sử đơn hàng của người dùng
        </p>
        <UserBottom />
      </MainContainer>
    </Page>
  )
}

export default UserSlugByAdmin
