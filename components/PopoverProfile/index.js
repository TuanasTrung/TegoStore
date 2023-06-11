import React from 'react'
import NextLink from "next/link";
// import { makeStyles } from "@mui/styles";
import { PopoverStyle } from './styles'
import { RiProfileLine, RiShoppingCartLine, RiHistoryLine, RiLogoutBoxRLine, RiAdminLine } from "react-icons/ri";
import { MenuList, MenuItem, ListItemIcon, ListItemText, Paper } from '@mui/material';

// const useStyles = makeStyles(() => ({
//   scrollBar: {
//     "&::-webkit-scrollbar": {
//       width: "10px",
//     },
//     "&::-webkit-scrollbar-track": {
//       background: "#f1f1f1",
//       borderRadius: "10px",
//     },
//     "&::-webkit-scrollbar-thumb": {
//       background: "#8888",
//       borderRadius: "10px",
//     },
//     "&::-webkit-scrollbar-thumb:hover": {
//       background: "#555",
//     },
//   },
// }));

const styledMenuItem = {
  padding: '12px 10px',
  display: "flex",
  marginBottom: '8px',
  alignItems: 'center',
  '&:hover': {
    borderRadius: '8px',
    backgroundColor: '#F2F4F5'
  },
  '& .MuiTypography-root': {
    color: '#172B4D',
    lineHeight: '24px',
    fontSize: '14px',
    fontWeight: 500,
  }
};

const PopoverProfile = ({ handleLogout }) => {
  // const classes = useStyles();
  const menu = [
    {
      title: 'Trang cá nhân',
      icon: RiProfileLine,
      href: '/profile',
    },
    {
      title: 'Đơn hàng',
      icon: RiShoppingCartLine,
      href: '/cart',
    },
    {
      title: 'Lịch sử mua hàng',
      icon: RiHistoryLine,
      href: '/history-cart',
    },
    {
      title: 'Trang Admin',
      icon: RiAdminLine,
      href: '/admin',
    },
  ]
  return (
    <PopoverStyle>
      <Paper className='paper-popover'>
        <MenuList sx={{
          padding: '16px 16px 8px',
          paddingTop: '0',
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 190px)',
        }}>
          {menu.map((item, index) => {
            const { icon: IconItem } = item;
            return (
              <NextLink key={index} href={item.href || '/'}>
                {/* <a style={{ textDecoration: 'none' }} href='/'> */}
                <MenuItem sx={styledMenuItem} disableRipple={true} {...(item.onClick && { onClick: item.onClick })}>
                  <ListItemIcon sx={{ margin: 0 }}>
                    <IconItem size={20} color='#F77A0C' />
                  </ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </MenuItem>
                {/* </a> */}
              </NextLink>
            )
          })}
          <MenuItem sx={styledMenuItem} disableRipple={true} onClick={handleLogout}>
            <ListItemIcon sx={{ margin: 0 }}>
              <RiLogoutBoxRLine size={20} color='#F77A0C' disabled />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </PopoverStyle>
  )
}

export default PopoverProfile
