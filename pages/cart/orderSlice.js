import { DOMAIN_SERVER_API } from "../../config"
import axios from "axios"
import { getAllOrdersSuccess } from "../../redux/Slice/orderSlice"

export const insertOrder = async (bill, navigate, accessToken, axiosJWT) => {
  // dispatch(logoutStart())
  try {
    await axiosJWT.post(`${DOMAIN_SERVER_API}/orders`, bill, {
      headers: { token: `Bearer ${accessToken}` }
    })
    await navigate('/cart')
    // dispatch(logoutSuccess())
  } catch (error) {
    console.log(error)
    // dispatch(logoutFailed())
  }
}

export const getAllOrders = async (dispatch) => {
  // dispatch(logoutStart())
  try {
    const res = await axios.get(`${DOMAIN_SERVER_API}/orders`)
    dispatch(getAllOrdersSuccess(res.data))
  } catch (error) {
    console.log(error)
    // dispatch(logoutFailed())
  }
}