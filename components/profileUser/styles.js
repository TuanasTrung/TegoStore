import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ProfileStyles = styled(Box)(() => ({
  marginTop: '20px',
  // border: "1px solid #CCD4DC",
  borderRadius: "8px",
  backgroundColor: "white",
  '.header-box': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    borderBottom: '1px solid #CCD4DC'
  },
  '.before': {
    width: '3px',
    height: '16px',
    backgroundColor: '#FB8906',
    display: 'block',
    marginRight: '8px'
  },
  ".title-infor": {
    fontSize: '16px',
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    lineHeight: "24px",
    flexGrow: 1,
    color: 'black',
  },
  ".edit": {
    fontSize: '14px',
    fontWeight: 600,
    color: 'white',
    padding: '8px 12px',
    backgroundColor: '#F77A0C',
    border: '1px solid #F77A0C',
    '&:hover':{
      backgroundColor: 'white',
      color: '#F77A0C'
    }
  },
  '.body-box': {
    padding: '20px 32px',
    '.gridItem-user': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      gap: '13px',
      '.name-phoneNumber': {
        lineHeight: '20px',
        flexGrow: 1,
        '>p': {
          fontSize: '14px',
          fontWeight: 600,
          color: 'black',
        },
        '>span': {
          fontSize: '13px',
          fontWeight: 400,
          color: 'grey',
        }
      }
    }
  },
  '.grid-container': {
    padding: '16px 0',
  },
  '.grid-items': {
    display: 'flex',
    alignItems: 'center'
  },
  '.form-title': {
    minWidth: '175px',
    fontSize: '14px',
    lineHeight: '20px',
    color: 'black',
  },
  '.form-content': {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    color: 'black',
    flex: 1,
  }
}))