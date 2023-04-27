import React from 'react'
import { Box, Button } from '@mui/material'
import { TopProductStyle } from './styles'
import { MainContainer } from '../layouts/style'
import { RiArrowDropRightLine } from 'react-icons/ri'

const TopProduct = () => {
  return (
    <TopProductStyle>
      <MainContainer>
        <Box className='box-more-detail'>
          <Button className='button-more-detail'>
            <span>Xem thêm</span>
            <RiArrowDropRightLine size={30} color='#fff' />
          </Button>
        </Box>
      </MainContainer>
    </TopProductStyle>
  )
}

export default TopProduct
