import React from 'react';
import { Layout } from 'antd';
import Search from '../search';

const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <Header className='header'>
      <div className='header-left'>
        <div className='header-title'>
          TEGO
        </div>
        <Search />
      </div>
      <div className='header-right'>

      </div>
    </Header>
  )
}

export default HeaderComponent
