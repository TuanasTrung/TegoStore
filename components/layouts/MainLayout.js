import React from 'react';
import { Layout } from 'antd';
import Header from '../header/index';
import Sidebar from '../sidebar/index';
import { MainContainer } from './style';
import { useRouter } from 'next/router';

const MainLayout = ({ children }) => {
  const router = useRouter();
  console.log('router: ', router)
  return (
    <>
      {(router.asPath).includes('register') || (router.asPath).includes('login') ? (
        <></>
      ) : (
        <Header />
      )}
      {children}
    </>
  )
}

export default MainLayout
