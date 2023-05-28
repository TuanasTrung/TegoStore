import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const CartStyles = styled(Box)(() => ({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  '.my-cart': {
    marginBottom: '10px',
    '>p': {
      fontSize: '1.5rem',
      fontWeight: 600
    },
  },
  '.cart-product': {
    width: '100%',
    '.product-information': {
      display: 'flex',
      height: '150px',
      width: '100%',
      backgroundColor: 'white',
      marginBottom: '14px',
      border: '1px solid #F77A0C',
      borderRadius: '6px',
      paddingRight: '20px',
      '.product-img': {
        height: '100%',
        width: '20%',
        marginRight: '20px',
        borderRadius: '6px',
        'img': {
          width: '100%',
          height: '100%',
          borderTopLeftRadius: '6px',
          borderBottomLeftRadius: '6px',
        }
      },
      '.product-text': {
        flex: 1,
        '.line-1': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '.title': {
            fontSize: '1.25rem',
            fontWeight: 600
          }
        },
        '.line-2': {
          display: 'flex',
          alignItems: 'center',
          '.price': {
            fontSize: '1rem',
            fontWeight: 500,
            marginRight: '30px'
          },
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
          }
        }
      }
    }
  },
  '.cart-payment': {
    width: '100%',
    minHeight: '100px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    color: 'grey',
    border: '1px solid grey',
    '.cart-location': {
      padding: '12px'
    },
    '.cart-information': {
      padding: '12px',
      '.button': {
        padding: '10px 20px',
        backgroundColor: '#F77A0C',
        color: 'white',
        fontWeight: 600,
        border: '1px solid #F77A0C',
        '&:hover': {
          backgroundColor: 'white',
          color: '#F77A0C'
        }
      }
    }
  }
}))