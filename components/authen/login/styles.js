import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

export const LoginFormStyle = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  '.login-form': {
    padding: '24px 20px',
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.3)',
    borderRadius: '6px'
  }
}))