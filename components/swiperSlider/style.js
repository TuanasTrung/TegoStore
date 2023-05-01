import { styled } from '@mui/material/styles';

export const SliderStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  '&.sliders': {
    '> .swiper': {
      paddingBottom: 8,
      '.swiper-pagination': {
        marginTop: 16,
        position: 'static',
        '.swiper-pagination-bullet': {
          background: '#F77A0C',
          transition: 'all ease-in-out 0.2s',
          '&.swiper-pagination-bullet-active': {
            background: theme.palette.text.active,
            width: 24,
            borderRadius: 8,
          }
        },
      },
      '&.paginationLeft': {
        '> .swiper-pagination': {
          textAlign: 'left'
        }
      },
      '&.paginationRight': {
        '> .swiper-pagination': {
          textAlign: 'right'
        }
      },
      '&.paginationInSide': {
        '> .swiper-pagination': {
          position: 'relative',
          marginTop: -34,
          left: 30
        }
      },
      '&.slideHeightAuto .swiper-wrapper .swiper-slide': {
        height: 'auto'
      },
    },
    '.swiper-slide': {
      width: 'auto',
    },
    '&.no-pagination > .swiper': {
      paddingBottom: 0,
      '> .swiper-pagination': {
        marginTop: 0,
      }
    },
    '&.navTopRight > .nav-button-next': {
      top: -39,
      width: 30,
      height: 30,
    },
    '&.navTopRight > .nav-button-prev': {
      top: -39,
      width: 30,
      height: 30,
      left: 'unset !important',
      right: 70,
    },
    '&.hide-nav-disabled .swiper-button-disabled': {
      display: 'none',
    },
    '.nav-button-next, .nav-button-prev': {
      width: 48,
      height: 48,
      background: '#fff',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.3)',
      cursor: 'pointer',
      '> img': {
        width: 8,
        height: 13,
      },
      '&.swiper-button-disabled': {
        background: '#F3F4F6',
      },
      '&:hover': {
        background: '#E7E9ED'
      },
    },
    '.nav-button-next': {
      right: -64,
      '&.nav-inside': {
        right: 24,
      },
    },
    '.nav-button-prev': {
      left: -64,
      '&.nav-inside': {
        left: 24,
      },
    },
  },
}));