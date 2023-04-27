import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ContainerSidebar = styled(Box)(() => {
  return {
    display: "flex",
    backgroundColor: '#606770',
    marginTop: 24,
    height: '100px',
    ".page-content": {
      flex: 1,
      marginLeft: 24,
    },
  };
});

export const FilterFormStyle = styled('div')(() => ({}))