// @mui
import { FormControlLabel, Switch } from '@mui/material'
// form
import { Controller, useFormContext } from 'react-hook-form'

export default function RHFSwitch({ name, ...other }) {
  const { control } = useFormContext()

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  )
}
