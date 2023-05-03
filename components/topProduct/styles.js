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
    justifyContent: 'end',
    float: 'left',
    width: '90%',
    height: '100%',
    position: 'relative',
    '.button-more-detail': {
      background: '#fff',
      padding: '7px 5px 7px 15px',
      '>span': {
        color: '#000',
        fontSize: '18px',
      }
    },
  }
})) 