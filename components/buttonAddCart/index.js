import React from 'react'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonStyle } from './styles';
import { Modal } from '@mui/material';
import ModalPutBag from '../modal';
import { addToCart } from '../../redux/Slice/cartSlice';
import { RiShoppingCartLine } from 'react-icons/ri';

const ButtonAddCart = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.login?.currentUser)

  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState('')

  const handleOpen = (product) => {
    if (user) {
      setOpen(true);
      setId(product._id);
      dispatch(addToCart(product));
    } else {
      router.push('/login')
    }
  }

  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonStyle className='item-button' onClick={() => handleOpen(product)}>
        <RiShoppingCartLine size={23} />
        {/* Thêm vào giỏ hàng */}
      </ButtonStyle>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalPutBag
          handleClose={handleClose}
          idProduct={id}
        />
      </Modal>
    </>
  )
}

export default ButtonAddCart
