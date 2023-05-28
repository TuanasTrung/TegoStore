import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const PopoverStyle = styled(Box)(() => ({
  paddingTop: '16px',
  width: '250px',
  backgroundColor: 'white',
  '.paper-popover': {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  }
}))