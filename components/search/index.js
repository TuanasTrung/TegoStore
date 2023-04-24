import React, { useState } from 'react';
import { RiSearchEyeLine, RiCloseLine } from "react-icons/ri";
import { Typography, Modal, Box, IconButton, TextField } from '@mui/material';
import { BoxSearch } from '../search/style';

const Search = () => {

  return (
    <BoxSearch>
      <TextField className='search-tf'>Trung</TextField>
    </BoxSearch>
  )
}

export default Search
