import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const ModalStyles = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '538px',
  background: 'white',
  border: '1px solid white',
  borderRadius: '6px',
  boxShadow: 24,
  padding: 15,
  display: 'flex',
  flexDirection: 'column',
  '.box-product': {
    display: 'flex',
    marginBottom: '15px'
  },
  '.box-image': {
    width: '90px',
    height: '90px',
    objectFit: 'cover',
    padding: '3px',
    marginRight: '12px',
    '>img': {
      width: '100%',
      height: '100%'
    },
  },
  '.box-information': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '.title': {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    '.price': {
      fontSize: '1.05rem',
      fontWeight: 600,
    },
    '.quantity': {
      fontSize: '0.75rem',
      fontWeight: 400,
    }
  },
  '.box-footer': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1rem',
    '.btn-back': {
      width: '100%',
      color: '#000',
      border: '1px solid #F77A0C',
      padding: '15px'
    },
    '.btn-cart': {
      width: '100%',
      color: '#fff',
      border: '1px solid #F77A0C',
      background: '#F77A0C',
      padding: '15px'
    }
  }
}))