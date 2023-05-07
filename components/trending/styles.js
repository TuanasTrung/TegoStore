import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const TrendingStyles = styled('div')(() => ({
  fontSize: '2rem',
  margin: '20px 0',
  '.grid-image-item': {
    width: '100%',
    '> img': {
      width: '100%',
      objectFit: 'cover'
    }
  },
  '.grid-information-item': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '.item-title': {
      fontSize: '1.25rem',
      fontWeight: 600,
      margin: '10px 0'
    },
    '.item-description': {
      textAlign: 'center',
      minHeight: '50px',
    },
    '.item-button': {
      color: '#fff',
      fontWeight: 600,
      backgroundColor: '#F77A0C',
      marginTop: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '7px 16px'
    }
  },
}))

export const WrapBox = styled(Box)(() => ({

}));