// @mui
import { InputAdornment } from '@mui/material'

import RHFTextField from './RHFTextField'

export default function RHFSearchTextField({ name, placeholder, ...other }) {
  return (
    <RHFTextField
      name={name}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            //icon
          </InputAdornment>
        ),
      }}
      {...other}
    />
  )
}
