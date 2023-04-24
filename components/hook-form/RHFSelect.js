import { Controller, useFormContext } from 'react-hook-form'

import { Select } from 'antd'

export default function RHFSelect({ name = '', onChange, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange: onFieldChange, ...otherField } = field;
        return (
          <Select
            onChange={e => {
              if (onChange) {
                onChange(e);
              }
              onFieldChange(e);
            }}
            {...otherField}
            error={!!error}
            errorMessage={error?.message}
            sx={{ width: '100%' }}
            {...other}
          />
        )
      }}
    />
  )
}
