import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const ButtonStyle = styled(Button)(() => ({
  margin: '16px 0',
  color: '#fff',
  backgroundColor: '#F77A0C',
  border: '1px solid #F77A0C',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#fff',
    color: '#F77A0C',
    border: '1px solid #F77A0C'
  }
}))