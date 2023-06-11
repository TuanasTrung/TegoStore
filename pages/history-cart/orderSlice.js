import axios from "axios"
import { DOMAIN_SERVER_API } from "../../config"
import { getOrdersStart, getOrdersSuccess, getOrdersFailed } from "../../redux/Slice/orderSlice"

export const getHistoryCart = async (user, dispatch) => {
  dispatch(getOrdersStart())
  try {
    const res = await axios.get(`${DOMAIN_SERVER_API}/orders/${user?._id}`
      // , {
      //   headers: { token: `Bearer ${accessToken}` }
      // }
    )
    dispatch(getOrdersSuccess(res.data))
  } catch (error) {
    dispatch(getOrdersFailed())
  }
}

export const deleteOrderById = async (id) => {
  try {
    await axios.delete(`${DOMAIN_SERVER_API}/orders/${id}`)
  } catch (err) {
    console.log(err)
  }
}