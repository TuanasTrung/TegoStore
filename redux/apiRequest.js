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
  logoutSuccess,
  updateStart,
  updateSuccess,
  updateFailed
} from './Slice/authSlice';
import {
  getUserByIdSuccess,
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
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
import { toast } from 'react-toastify';


export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${DOMAIN_SERVER_API}/auth/login`, user)
    await dispatch(loginSuccess(res.data))
    navigate('/');
  } catch (error) {
    dispatch(loginFailed())
    console.log(error.message)
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

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
  dispatch(getUsersStart);
  try {
    const res = await axiosJWT.get(`${DOMAIN_SERVER_API}/users`, {
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
    const res = await axios.get(`${DOMAIN_SERVER_API}/products`);
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

export const updateUser = async (dispatch, user, axiosJWT) => {
  dispatch(updateStart)
  try {
    const res = await axiosJWT.put(`${DOMAIN_SERVER_API}/users/${user._id}`, user)
    dispatch(updateSuccess(res.data))
  } catch (error) {
    dispatch(updateFailed(error))
  }
}

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(`${DOMAIN_SERVER_API}/users/${id}`)
    // dispatch(updateSuccess(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const getUserById = async (id, accessToken, dispatch, axiosJWT) => {
  dispatch(getUsersStart())
  try {
    const res = await axiosJWT.get(`${DOMAIN_SERVER_API}/users/${id}`, {
      headers: { token: `Bearer ${accessToken}` }
    })
    dispatch(getUserByIdSuccess(res.data))
  } catch (error) {
    dispatch(getUsersFailed())
  }
}

export const InsertNewProduct = async (product, dispatch) => {
  try {
    await axios.post(`${DOMAIN_SERVER_API}/products/`, product)
    getAllProducts(product, dispatch)
  } catch (error) {
    console.log(error)
  }
}

export const DeleteProduct = async (id) => {
  try {
    await axios.delete(`${DOMAIN_SERVER_API}/products/${id}`);
  } catch (error) {
    console.log(error)
  }
}

export const EditProduct = async (dispatch, id, product, getAll = true) => {
  try {
    await axios.put(`${DOMAIN_SERVER_API}/products/${id}`, product);
    if (getAll) {
      getAllProducts(product, dispatch)
    }
  } catch (error) {
    console.log(error)
  }
}