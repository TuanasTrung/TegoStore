import React, { useEffect } from 'react'
import Page from '../../components/Page'
import { MainContainer } from '../../components/layouts/style'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import ProfileComponent from '../../components/profileUser'

const ProfileUser = () => {
  const user = useSelector(state => state.auth.login?.currentUser)
  const router = useRouter();
  useEffect(() => {
    !user?._id && router.push('/login')
  })
  return (
    <Page title='Trang cá nhân'>
      <MainContainer>
        <ProfileComponent />
      </MainContainer>
    </Page>
  )
}

export default ProfileUser
