import { styled } from '@mui/material/styles';
import { Box } from '@mui/material'

export const AUS = styled(Box)(() => ({
  // border: '1px solid #F77A0C',
  // borderRadius: '6px',
  // padding: '18px'
  '.btnAdd': {
    color: 'white',
    backgroundColor: '#F77A0C',
    border: '1px solid #F77A0C',
    width: '15%',
    marginBottom: '20px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#F77A0C'
    }
  }
}))