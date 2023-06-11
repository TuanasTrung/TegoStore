import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const DashboardStyle = styled(Box)(() => ({
  '.dbHeader': {
    '.dbSquare': {
      border: '1px solid #F77A0C',
      minHeight: '150px',
      padding: 0,
      borderRadius: '6px',
      padding: '18px',
      '.dbheader': {
        minHeight: '50px',
        '& .MuiIconButton-root': {
          borderRadius: '6px',
          backgroundColor: '#F5F5F5'
        },
      },
      '.text': {
        fontSize: '2.125rem',
        linHeight: '1.334em',
        fontWeight: 600,
        color: '#F77A0C'
      }
    },
  },
}))