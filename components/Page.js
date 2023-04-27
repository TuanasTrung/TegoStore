import { forwardRef } from 'react'

// next
import Head from 'next/head'

// @mui
import { Box } from '@mui/material'

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title}`}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
))

export default Page
