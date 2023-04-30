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
      textAlign: 'center'
    },
    'item-button': {

    }
  },
}))

export const WrapBox = styled(Box)(() => ({

}));