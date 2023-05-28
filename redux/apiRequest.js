import axios from 'axios';
import { DOMAIN_SERVER_API } from '../config';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutFailed,
  logoutSuccess
} from './Slice/authSlice';
import {
  getUsersFailed,
  getUsersStart,
  getUsersSuccess
} from './Slice/usersSlice';
import {
  getProductsFailed,
  getProductsStart,
  getProductsSuccess
} from './Slice/productsSlice';
import {
  getProductStart,
  getProductSuccess,
  getProductFailed
} from './Slice/productSlice';


export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${DOMAIN_SERVER_API}/auth/login`, user)
    await dispatch(loginSuccess(res.data))
    navigate('/');
  } catch (error) {
    dispatch(loginFailed())
    console.log(error)
  }
}

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart())
  try {
    await axios.post(`${DOMAIN_SERVER_API}/auth/register`, user);
    dispatch(registerSuccess());
    navigate('/login')
  } catch (error) {
    dispatch(registerFailed())
  }
}

export const getAllUsers = async (accessToken, dispatch) => {
  dispatch(getUsersStart);
  try {
    const res = await axios.get(`${DOMAIN_SERVER_API}/users`, {
      headers: { token: `Bearer ${accessToken}` }
    });
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailed());
  }
}

export const getAllProducts = async (products, dispatch) => {
  dispatch(getProductsStart);
  try {
    const res = await axios.get(`${DOMAIN_SERVER_API}/products`, products);
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailed())
  }
}

export const getProductById = async (id, dispatch) => {
  dispatch(getProductStart);
  try {
    const res = await axios.get(`${DOMAIN_SERVER_API}/products/${id}`);
    dispatch(getProductSuccess(res.data))
  } catch (error) {
    dispatch(getProductFailed())
  }
}

export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logoutStart())
  try {
    await axiosJWT.post(`${DOMAIN_SERVER_API}/auth/logout`, id, {
      headers: { token: `Bearer ${accessToken}` }
    })
    await navigate('/')
    dispatch(logoutSuccess())
  } catch (error) {
    dispatch(logoutFailed())
  }
}