import { styled } from '@mui/material/styles'
import { Box } from '@mui/material';

export const FeatureToysStyle = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  padding: "46px 60px",
  background: "#EDEDED",
  ".feature-title-box": {
    width: 300,
    marginRight: 60,
    ".title-line": {
      marginBottom: 16,
      marginTop: 24,
      display: "flex",
      fontSize: '32px',
      lineHeight: "40px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
      "> span": {
        flex: 1,
        borderBottom: "3px solid #FF9800",
        transform: "translateY(-10px)",
      },
    },
    ".title-line.line-left > span": {
      marginRight: "16px",
    },
    ".title-line.line-right > span": {
      marginLeft: "16px",
    },
    ".title-desc": {
      fontSize: "1rem",
      color: '#606770',
      "> span": {
        margin: "0px 16px",
      },
      "> svg": {
        verticalAlign: "middle",
      },
    },
  },
  ".toy-item": {
    boxShadow: "0px 3px 5px rgba(9, 30, 66, 0.2)",
    backgroundColor: "#fff",
    borderRadius: "4px",
  },
  ".toy-content": {
    padding: "8px 12px 24px",
    textAlign: "center",
  },
  ".toy-title": {
    lineHeight: "20px",
    "> a": {
      fontSize: '14px',
      fontWeight: 600,
      color: theme.palette.text.primary,
      textDecoration: "none",
    },
  },
  ".toy-desc": {
    fontSize: '13px',
    color: theme.palette.text.sub,
  },
  ".toy-thumbnail": {
    width: "100%",
  },

  '.swiper-slide': {
    height: 'auto',
    '.toy-item': {
      height: '100%',
    },
  },

  ".toys-box": {
    maxWidth: "calc(100% - 300px - 60px)",
  },
}));