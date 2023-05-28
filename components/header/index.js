import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAxios } from '../../utils/createInstance'
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import { Box, Button, Typography, Popover } from '@mui/material';
import { styled } from "@mui/material/styles";
import PopoverProfile from '../PopoverProfile';
import { MainContainer } from '../layouts/style';
import { RiAccountCircleLine } from 'react-icons/ri';
import Search from '../search';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { logOut } from '../../redux/apiRequest';
import { loginSuccess } from '../../redux/Slice/authSlice';
import { useCookies } from 'react-cookie'

const { Header } = Layout;

const AuthenBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  '& .button-signUp': {
    padding: '7px 16px',
    background: '#F77A0C',
    '&:hover': {
      background: '#F77A0C'
    },
    '>span': {
      color: '#fff',
      fontWeight: '600',
      fontSize: '14px'
    },
  },
  '& .button-signIn': {
    padding: '7px 16px',
    '>span': {
      color: '#F77A0C',
      fontWeight: '600',
      fontSize: '14px',
    },
  }
}))

const HeaderComponent = () => {
  const [authentication, setAuthentication] = useState(true);
  const [cookies, setCookies] = useCookies(['']);
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const user = useSelector((state) => state.auth.login?.currentUser)
  const userId = user?._id;
  const userAccessToken = user?.accessToken;

  const axiosJWT = createAxios(user, dispatch, loginSuccess);

  useEffect(() => {
    setCookies('refreshToken', user?.refreshToken, {
      secure: true,
      path: '/'
    })
  }, [])

  const handleLogOut = () => {
    logOut(dispatch, userId, router.push, userAccessToken, axiosJWT)
    // console.log(axiosJWT)
  }
  return (
    <Header className='header'>
      <MainContainer>
        <Box className='header-left'>
          <Link href={'/'}>
            <Box className='header-title'>
              <span>
                TEGO
              </span>
            </Box>
          </Link>
          <Search />
        </Box>
        <Box className='header-right'>
          {user ? (
            <>
              <Box className='profile' onClick={handleOpen}>
                <RiAccountCircleLine size={35} color='#F77A0C' />
                <Box >
                  <Typography variantMapping='p' variant='subtitle2'>Xin chào,</Typography>
                  <Typography variantMapping='p' variant='subtitle1'>{user.username}</Typography>
                </Box>
              </Box>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <PopoverProfile
                  handleLogout={handleLogOut}
                />
              </Popover>
            </>
          ) : (
            <AuthenBox>
              <Box className='box-authen'>
                <Link href={'/register'}>
                  <Button className='button-signUp'>
                    <span>Đăng ký</span>
                  </Button>
                </Link>
              </Box>

              <Box className='box-authen'>
                <Link href={'/login'}>
                  <Button className='button-signIn'>
                    <span>Đăng nhập</span>
                  </Button>
                </Link>
              </Box>
            </AuthenBox>
          )}
        </Box>
      </MainContainer>
    </Header >
  )
}

export default HeaderComponent
