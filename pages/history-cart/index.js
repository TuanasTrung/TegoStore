import React, { useEffect } from 'react'
import Page from '../../components/Page'
import TableAntd from '../../components/table'
import { MainContainer } from '../../components/layouts/style'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getHistoryCart } from './orderSlice'

const HistoryCart = () => {
  const user = useSelector(state => state.auth.login?.currentUser)
  const router = useRouter();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders?.order)

  useEffect(() => {
    !user?._id && router.push('/login')
  }, [])

  useEffect(() => {
    getHistoryCart(user, dispatch)
  }, [])

  return (
    <Page title='Lịch sử mua hàng'>
      <MainContainer>
        <TableAntd orders={orders} />
      </MainContainer>
    </Page>
  )
}

export default HistoryCart
