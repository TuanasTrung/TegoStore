import { TextField } from "@mui/material";
// form
import { Controller, useFormContext } from "react-hook-form";

export default function RHFTextField({ name, beforeChange, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        if (beforeChange) {
          let { value } = field;
          field.value = beforeChange(value);
        }

        return (
          <TextField
            {...field}
            error={!!error}
            helperText={error?.message}
            {...other}
          />
        )
      }}
    />
  );
}
