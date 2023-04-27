import React, { useState, useRef } from 'react';
import { RiSearchEyeLine, RiCloseCircleLine } from "react-icons/ri";
import { Typography, Modal, Box, IconButton, TextField, InputAdornment } from '@mui/material';
import { BoxSearch } from '../search/style';

const Search = () => {
  const _textField = useRef();
  const _inputRef = useRef();

  const onClick = () => {
    console.log('inputref value: ', _inputRef.current.value)
    _inputRef.current.value = '';
  }

  return (
    <BoxSearch>
      <TextField
        ref={_textField}
        inputRef={_inputRef}
        placeholder='Tìm kiếm đồ chơi...'
        InputProps={{
          startAdornment:
            <InputAdornment position='start'>
              <RiSearchEyeLine size={20} color='#F77A0C' />
            </InputAdornment>
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            onClick(e);
          }
        }}
      />
    </BoxSearch>
  )
}

export default Search
