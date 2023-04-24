// form
import { Controller, useFormContext } from 'react-hook-form'
import { DatePicker } from 'antd';

export default function RHFDatePicker({
  name,
  label,
  iconPosition,
  ...props
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          iconPosition={iconPosition}
          inputFormat='DD/MM/YYYY'
          error={!!error}
          label={label}
          helperText={error?.message}
          {...props}
        />
      )}
    />
  )
}
