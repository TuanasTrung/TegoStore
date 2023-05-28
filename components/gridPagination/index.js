import React from 'react'
import Link from 'next/link'
import { GridPageStyle } from './styles'
import { Typography, Box, Pagination, Grid, Rating, } from '@mui/material'
import { usePagination } from '../../hook/pagination'
import ButtonAddCart from '../buttonAddCart'

const GridPagination = ({ data }) => {

  const perPageRecords = 12

  const { totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage
  } = usePagination(perPageRecords, data?.length)

  return (
    <GridPageStyle>
      <Grid container>
        {(() => {
          const displayProducts = []
          for (let i = startPageIndex; i <= (endPageIndex > data?.length ? data?.length - 1 : endPageIndex); i++) {
            displayProducts.push(
              <Grid item md={3} key={data[i]?._id} className='grid-items'>
                <Box className='grid-item-product'>
                  <Link href={`/product/${data[i]?._id}`}>
                    <Box className='grid-item-image'>
                      <img src={data[i]?.image} />
                    </Box>
                  </Link>

                  <Box className='grid-item-information'>
                    <Typography>{data[i]?.name}</Typography>
                    <Rating name="simple-controlled"
                      value={data[i]?.rating}
                      readOnly />
                    <Typography>{data[i]?.price} VND</Typography>
                    <ButtonAddCart
                      product={data[i]} />
                  </Box>
                </Box>
              </Grid>
            )
          }
          return displayProducts
        })()}
      </Grid>
      <Pagination
        color='primary'
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </GridPageStyle>
  )
}

export default GridPagination
