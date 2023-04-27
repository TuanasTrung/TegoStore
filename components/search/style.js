import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

export const BoxSearch = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  '& .MuiInputBase-root': {
    borderRadius: '30px',
    height: '40px',
    minWidth: '240px',
    background: '#F0F2F5',
    margin: '0 20px',
    alignItems: 'center',
    '&:hover fieldset': {
      borderColor: '#B8BABC',
    },
    'input': {
      height: '100%',
      padding: '7px 8px',
      display: 'flex',
      alignItems: 'center',
      '&::placeholder': {
        color: '#606770',
        fontWeight: 500
      },
    },
  }
}));