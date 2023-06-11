import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const FormEditStyle = styled('div')(({ width = 422 }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: width,
  backgroundColor: "white",
  borderRadius: "6px",
  boxShadow: "0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.3)",
  display: "flex",
  flexDirection: "column",
  '.modal-edit': {
    ".modal-header": {
      minHeight: "68px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 24px",
      borderBottom: "1px solid #E7E9ED",
      color: "#172B4D",
      "& .MuiTypography-root": {
        fontSize: 16,
        fontWeight: "600",
        alignItems: "center",
        textAlign: "center",
        lineHeight: "24px",
        display: "inline-flex",
      },
    },
    ".modal-body": {
      width: '100%',
      padding: "24px 24px 0 24px",
      maxHeight: 'calc(100vh - 190px)',
      overflow: 'auto',
      '.title': {
        color: 'black',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '20px',
        marginBottom: '8px',
      },
    },
    ".modal-footer": {
      width: "100%",
      height: "68px",
      paddingRight: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      borderTop: "1px solid #E7E9ED",
      '.btn-cancel': {
        border: '1px solid #F77A0C',
        color: '#F77A0C',
        marginRight: '7px'
      },
      '.btn-ok': {
        border: '1px solid #F77A0C',
        backgroundColor: '#F77A0C',
        color: 'white'
      },
    },
  },
  // '.modal-content-box': {
  //   minHeight: "365px",
  //   maxHeight: "calc(100vh - 60px)",
  // },

  // '&.alert-modal': {
  //   width: width,
  //   maxWidth: '98%',
  //   minHeight: '1px',
  //   // '.MuiTypography-root': {
  //   //   fontFamily: FONT_FAMILY,
  //   // },
  //   '.alert-image': {
  //     display: 'inline-block',
  //     marginBottom: 16,
  //   },
  //   '.modal-header': {
  //     borderBottom: 'none',
  //     padding: '10px 24px',
  //     minHeight: '60px',
  //   },
  //   '.modal-body': {
  //     textAlign: 'center',
  //   },
  //   '.modal-footer': {
  //     height: 'auto',
  //     '&.btns-vertical': {
  //       display: 'block',
  //       borderTop: 'none',
  //       padding: '24px 32px',
  //     },
  //     '&.btns-horizontal': {
  //       padding: '16px 24px',
  //       flexDirection: 'row-reverse',
  //       justifyContent: 'flex-start',
  //       '> button': {
  //         display: 'inline-block',
  //         width: 'auto',
  //       },
  //     },
  //   },
  // },
}))