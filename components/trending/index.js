import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { MainContainer } from '../layouts/style'
import { TrendingStyles } from './styles'
import { RiArrowRightSLine } from "react-icons/ri";

const toyTrending = [
  {
    image: '/assets/images/trending/titanic.png',
    title: 'Lego@Titanic',
    description: 'Bring the 20th century marvel to life in exquisite detail and scale.'
  },
  {
    image: '/assets/images/trending/starry night.png',
    title: 'Lego@Idea The Starry Night',
    description: 'Bring a masterpiece to life like never before.'
  },
  {
    image: '/assets/images/trending/land rover.png',
    title: 'New Land Rover Classic Defender 90',
    description: 'Put your creativity into gear with thí adventurous set.'
  }
]

const TrendingNow = () => {
  const renderTitle = (title) => {
    return (
      <Box>
        <span>
          {title}
        </span>
      </Box>
    )
  }

  return (
    <TrendingStyles>
      <MainContainer>
        {renderTitle('Trending now')}

        <Grid container spacing={2}>
          {toyTrending.map((toy, index) => (
            <Grid item md={4} key={index}>
              <Box className='grid-box-item'>
                <Box className='grid-image-item'>
                  <img src={toy.image} alt='img' />
                </Box>
                <Box className='grid-information-item'>
                  <Typography className='item-title'>{toy.title}</Typography>
                  <Typography className='item-description'>{toy.description}</Typography>
                  <Link href={'/'} >
                    <Button className='item-button'>
                      <span>
                        Shop now
                      </span>
                      <RiArrowRightSLine size={20} />
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          )
          )}
        </Grid>

      </MainContainer>
    </TrendingStyles>
  )
}

export default TrendingNow
