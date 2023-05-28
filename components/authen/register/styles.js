import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

export const RegisterFormStyle = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  '.login-form': {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '24px',
    '.input-field': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '>button': {
        padding: 0,
        marginRight: 10
      }
    },
    '.button-form': {
      flex: 1,
      marginTop: '20px',
      border: '1px solid #F77A0C',
      backgroundColor: '#F77A0C',
      color: '#fff',
      fontSize: '1rem',
      '&:hover': {
        color: '#F77A0C',
        backgroundColor: '#fff'
      }
    }
  }
}))