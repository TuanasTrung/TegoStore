import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

export const BoxSearch = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  padding: '24px 20px',
  minWidth: '400px',
  '& .modal-header': {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    '& .MuiTypography-root': {
      lineHeight: '20px'
    }
  }
}));