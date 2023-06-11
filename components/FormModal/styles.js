import { styled } from '@mui/material/styles'

export const FormStyle = styled('div')(() => ({
  '.form-group': {
    marginBottom: '24px',
    '&.no-margin': {
      marginBottom: 0,
    },
    '> label': {
      marginBottom: '8px',
      display: 'block',
      fontWeight: 500,
      color: 'grey',
    },
    '.MuiInputBase-root': {
      borderRadius: '6px',
      fontSize: 14,
      '.tag-item': {
        transform: 'none',
      },
      '.MuiInputBase-input': {
        // transform: 'translateY(1px)',
      },
    },
  },
  '.form-value': {
    height: 44,
    background: '#EFF3F6',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    fontSize: 14,
  },
}));