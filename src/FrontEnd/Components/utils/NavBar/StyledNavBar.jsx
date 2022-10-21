import { styled } from "@mui/material/styles";
import {AppBar} from "@mui/material";

const StyledNavBar = styled(AppBar)(() => ({
  backgroundColor:'rgba(255, 219, 21, 1)',
  zIndex:5,
  '.containerNavBar':{
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    padding: '10px 24px',
    img:{
        margin:'auto !important'
    }
  }
}));

export default StyledNavBar;
