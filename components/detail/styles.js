import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';

export const ToyDetailStyles = styled(Box)(() => ({
  marginTop: '20px',
  '.detail-image': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid rgb(224, 224, 224)',
  },
  '.detail-information': {
    padding: '20px',
    '.detail-name': {
      fontWeight: 500,
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
    },
    '.detail-price': {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    '.detail-status': {
      color: 'rgb(0, 133, 55)',
      fontSize: '0.875rem',
      lineHeight: '1.1875rem',
      fontWeight: 600,
      marginBottom: '1.25rem'
    },
    '.detail-quantity': {
      display: 'flex',
      alignItems: 'end',
      marginBottom: '1.25rem',
      '.change-quantity': {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgb(224, 224, 224)',
        borderRadius: '6px',
        marginRight: '16px',
        '.minus': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        },
        '.number': {
          borderRight: '1px solid rgb(224, 224, 224)',
          borderLeft: '1px solid rgb(224, 224, 224)',
          padding: '7px 24px'
        }
      },
      '.limit-quantity': {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        '.max-quantity': {
          fontSize: '0.875rem'
        },
      },
    },
    '.item-button': {
      color: '#fff',
      backgroundColor: '#F77A0C',
      border: '1px solid #F77A0C',
      fontWeight: 600,
      flex: 1,
      '&:hover': {
        border: '1px solid #F77A0C',
        backgroundColor: '#fff',
        color: '#F77A0C'
      }
    }
  }
}))