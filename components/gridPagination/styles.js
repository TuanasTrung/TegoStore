import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const GridPaginationStyle = styled(Box)(() => ({
  margin: "20px 0",
  '.box-title':{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '>p':{
      fontSize: '1.5rem',
      fontWeight: 500,
    }
  }
}))

export const GridPageStyle = styled('div')(() => ({
  fontSize: '2rem',
  '.grid-item-product': {
    padding: '16px 10px',
    borderRadius: '6px',
    minHeight: '100%',
  },
  '.grid-items': {
    width: '100%'
  },
  '.grid-item-image': {
    height: '100%',
    minHeight: '340px',
    maxHeight: '340px',
    padding: '5px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #F0F2F5',
    borderRadius: '6px',
    cursor: 'pointer',
    '&:hover ': {
      border: '1px solid #F77A0C',
      boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.3)',
    },
    '&:hover >img': {
      scale: '1.05',
      transition: '0.5s'
    },
    '>img': {
      width: '100%'
    }
  },
  '.grid-item-information': {
    display: 'flex',
    flexDirection: 'column',
    '.item-button': {
      margin: '16px 0',
      color: '#fff',
      backgroundColor: '#F77A0C',
      border: '1px solid #F77A0C',
      fontWeight: 600,
      '&:hover': {
        backgroundColor: '#fff',
        color: '#F77A0C',
        border: '1px solid #F77A0C'
      }
    }
  }
}))