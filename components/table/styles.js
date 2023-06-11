import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const TableStyle = styled(Box)(() => ({
  marginTop: '20px'
}))

export const ButtonFunction = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90%',
  '.btn': {
    color: 'white',
    backgroundColor: '#F77A0C',
    border: '1px solid #F77A0C',
    '&:hover': {
      backgroundColor: 'white',
      color: '#F77A0C'
    }
  }
}))