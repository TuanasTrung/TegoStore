import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

export const FormStyle = styled(Box)(() => ({
  height: '90vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '.form-style': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.3)',
    borderRadius: '6px',
    padding: '30px 25px',
  }
}))