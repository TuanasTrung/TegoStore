import { styled } from "@mui/material/styles";

export const SliderGridStyle = styled('div')(() => ({
  fontSize: '2rem',
  '.grid-item-product': {
    padding: '16px 10px',
    border: '1px solid #F0F2F5',
    borderRadius: '6px',
    minHeight: '100%',
    '&:hover ': {
      border: '1px solid #F77A0C',
      boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.3)',
    }
  },
  '.grid-items': {
    width: '100%'
  },
  '.grid-item-image': {
    height: '100%',
    minHeight: '340px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
      backgroundColor: '#F77A0C'
    }
  }
}))