import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";

const StyledNodFound = styled(Box)(() => ({
  backgroundColor:'rgba(255, 255, 255, 1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  padding: '50px 15px',
  boxShadow:' 0 1px 2px 0 rgb(0 0 0 / 20%)',
  borderRadius: 10,
}));

export default StyledNodFound;
