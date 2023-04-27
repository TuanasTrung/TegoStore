import { Chip, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

const ChipStyle = styled(Chip)(({
  theme,
  onClick,
  onDelete,
}) => ({
  backgroundColor: '#fff',
  color: theme.palette.text.primary,
  border: 'none',
  marginTop: '2px!important',
  marginBottom: '2px!important',
  ...(onDelete && { justifyContent: 'space-between!important' }),
  ...(onClick && { cursor: 'pointer' }),
  '.MuiChip-label': {
    fontSize: '14px',
    transform: 'translateY(-1px)',
  },
  '.MuiSvgIcon-root': {
    fontSize: '18px',
    color: theme.palette.text.placeholder,
    marginRight: '6px',
    '&:hover': {
      color: 'inherit',
    }
  },
  '.MuiChip-icon': {
    marginLeft: 8,
  },
}));

const Tag = ({
  value = null,
  name,
  variant = "outlined",
  onDelete,
  ...props
}) => {
  const theme = useTheme();
  const { active, border, sx, ...other } = props;
  if (!value) {
    value = name;
  }

  return (
    <ChipStyle
      label={name}
      variant={variant}
      sx={{
        ...(border && {
          border: `1px solid ${active ? theme.palette.text.active : theme.palette.text.border}`,
        }),
        ...(active && {
          color: theme.palette.text.active,
          backgroundColor: theme.palette.background.active,
          '.MuiSvgIcon-root': {
            color: theme.palette.text.active,
          },
        }),
        ...sx
      }}
      {...(onDelete && { onDelete: () => onDelete(value) })}
      {...other}
    />
  )
}

export default Tag;