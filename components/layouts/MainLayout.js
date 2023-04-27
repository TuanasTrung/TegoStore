import React from 'react';
import { Layout } from 'antd';
import Header from '../header/index';
import Sidebar from '../sidebar/index';
import { MainContainer } from './style';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MainLayout
