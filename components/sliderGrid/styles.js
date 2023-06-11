import { styled } from "@mui/material/styles";

export const SliderGridStyle = styled('div')(() => ({
  fontSize: '1rem',
  '.title': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '>span': {
      fontSize: '2rem',
      marginLeft: '7px'
    },
    '>a':{
      color: '#F77A0C',
      marginRight: '28px'
    }
  },
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