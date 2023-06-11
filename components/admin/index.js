import React, { useEffect } from 'react'
import { AdminStyles } from './styles'
import {
  Grid as MuiGrid,
  Box,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { RiNumbersLine, RiGroupLine, RiBillLine, RiStarLine } from "react-icons/ri"
import Dashboard from '../dashboard';
import AdminUser from '../adminUser';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/apiRequest';
import { createAxios } from '../../utils/createInstance';
import { loginSuccess } from '../../redux/Slice/authSlice';
import AdminOrder from '../adminOrder';
import AdminProduct from '../adminProduct';

const styledMenuItem = {
  padding: '12px 10px',
  display: "flex",
  marginBottom: '8px',
  alignItems: 'center',
  borderRadius: '6px',
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

const menu = [
  {
    index: 0,
    title: 'Dashboard',
    icon: RiNumbersLine,
    href: '/profile',
  },
  {
    index: 1,
    title: 'Danh sách tài khoản',
    icon: RiGroupLine,
    href: '/cart',
  },
  {
    index: 2,
    title: 'Đơn hàng gần đây',
    icon: RiBillLine,
    href: '/history-cart',
  },
  {
    index: 3,
    title: 'Danh sách sản phẩm',
    icon: RiStarLine,
    href: '/admin',
  },
]

const AdminComponent = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const user = useSelector(state => state.auth.login?.currentUser)
  const users = useSelector(state => state.users.users?.allusers) || []
  const order = useSelector(state => state.orders.orders?.allOrders)
  const products = useSelector(state => state.products.products?.allProducts)
  const showData = users.filter(notAd => notAd.admin != true)
  const axiosJWT = createAxios(user, dispatch, loginSuccess)

  useEffect(() => {
    getAllUsers(user?.accessToken, dispatch, axiosJWT)
  }, [])

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <AdminStyles>
      <MuiGrid container spacing={2}>
        <MuiGrid item md={3}>
          <Box className='menu'>
            <MenuList>
              {menu.map((item, index) => {
                const { icon: IconItem } = item;
                return (
                  <MenuItem
                    key={index}
                    sx={styledMenuItem}
                    style={{
                      background: value === item.index ? '#F77A0C' : '',
                    }}
                    disableRipple={true}
                    onClick={() => {
                      setValue(item.index)
                      console.log(item.index)
                    }}
                  >
                    <ListItemIcon sx={{ margin: 0 }}>
                      <IconItem size={20} color={value === item.index ? '#fff' : '#F77A0C'} />
                    </ListItemIcon>
                    <ListItemText sx={{
                      '>span': {
                        color: value === item.index ? '#fff !important' : '',
                      }
                    }}>{item.title}</ListItemText>
                  </MenuItem>
                )
              })}
            </MenuList>
          </Box>
        </MuiGrid>
        <MuiGrid item md={9}>
          <TabPanel value={value} index={0}>
            {/* <Dashboard /> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AdminUser data={showData} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AdminOrder data={order} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <AdminProduct data={products} />
          </TabPanel>
        </MuiGrid>
      </MuiGrid>
    </AdminStyles>
  )
}

export default AdminComponent
