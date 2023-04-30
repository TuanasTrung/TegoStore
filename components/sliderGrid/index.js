import React from 'react'
import { SliderGridStyle } from './styles'
import { MainContainer } from '../layouts/style'
import Link from 'next/link'

const SliderGrid = () => {
  const renderTitle = (title) => {
    return (
      <Link href={'/'}>
        <span>{title}</span>
      </Link>
    )
  }

  return (
    <SliderGridStyle>
      <MainContainer>
        {renderTitle('Trending now')}
      </MainContainer>
    </SliderGridStyle>
  )
}

export default SliderGrid
