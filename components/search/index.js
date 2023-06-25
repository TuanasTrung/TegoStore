import React, { useState, useRef } from 'react';
import { RiSearchEyeLine, RiCloseCircleLine } from "react-icons/ri";
import { Typography, Modal, Box, IconButton, TextField, InputAdornment } from '@mui/material';
import { BoxSearch } from '../search/style';
import { useRouter } from 'next/router';

const Search = () => {
  const _textField = useRef();
  const _inputRef = useRef();
  const router = useRouter();

  const onClick = async () => {
    if (router.asPath === '/allProducts') {
      await router.push(`/allProducts/search?s=${_inputRef.current.value}`);
    } else {
      if (_inputRef.current.value === '') {
      } else {
        await router.push(`/allProducts/search?s=${_inputRef.current.value}`);
      }
    }
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
