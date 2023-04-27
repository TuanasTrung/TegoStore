import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    minWidth: 1440,
  },
  width: '100%',
  maxWidth: 'calc(100% - 160px)',
  marginLeft: "auto",
  marginRight: "auto",
}));