import React, { useState } from 'react';
import { Layout } from 'antd';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { MainContainer } from '../layouts/style';
import { RiAccountCircleLine } from 'react-icons/ri';
import Search from '../search';
import Link from 'next/link';

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
  const [authentication, setAuthentication] = useState(false);
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
          {authentication ? (
            <Box className='profile'>
              <RiAccountCircleLine size={35} color='#F77A0C' />
              <Box >
                <Typography variantMapping='p' variant='subtitle2'>Xin chào,</Typography>
                <Typography variantMapping='p' variant='subtitle1'>Trung</Typography>
              </Box>
            </Box>
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
