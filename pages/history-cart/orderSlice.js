import axios from "axios"
import { DOMAIN_SERVER_API } from "../../config"
import { getOrdersStart, getOrdersSuccess, getOrdersFailed } from "../../redux/Slice/orderSlice"

export const getHistoryCart = async (id, dispatch) => {
  dispatch(getOrdersStart())
  try {
    const res = await axios.get(`${DOMAIN_SERVER_API}/orders/${id}`
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

export const updateOrderById = async (id, user, dispatch, userId) => {
  try {
    await axios.put(`${DOMAIN_SERVER_API}/orders/${id}`, user)
    await getHistoryCart(userId, dispatch)
  } catch (error) {
    console.log(error)
  }
}