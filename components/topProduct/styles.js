import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const TopProductStyle = styled(Box)(() => ({
  minHeight: '550px',
  display: 'flex',
  background: "url(/assets/images/banner.png)",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '> div': {
    flex: 1,
  },
  '& .box-more-detail': {
    display: 'flex',
    alignItems: 'center',
    float: 'left',
    width: '30%',
    height: '100%',
    position: 'relative',
    '.button-more-detail': {
      background: '#F77A0C',
      padding: '7px 5px 7px 15px',
      '>span': {
        color: '#fff',
        fontSize: '18px',
      }
    },
  }
})) 