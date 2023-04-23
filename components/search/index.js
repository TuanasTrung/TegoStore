import React, { useState } from 'react';
import { RiSearchEyeLine, RiCloseLine } from "react-icons/ri";
import { Typography, Modal, Box, IconButton } from '@mui/material';
import { BoxSearch } from '../search/style';

const Search = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className='search-button' onClick={handleOpen}>
        <RiSearchEyeLine size={20} color='#01048a' />
        <span>
          Tìm kiếm sản phẩm ...
        </span>
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxSearch>
          <Box className='modal-header'>
            <Box display='flex' alignItems='center'>
              <Typography>Tìm kiếm sản phẩm</Typography>
            </Box>
            <IconButton onClick={handleClose}>
              <RiCloseLine size={20} />
            </IconButton>
          </Box>
        </BoxSearch>
      </Modal>
    </>
  )
}

export default Search
