import { styled } from "@mui/material/styles";
import { Box } from '@mui/material'
const StyledLoader = styled(Box)(({ showloader }) => ({
  margin: "auto",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  display: `${showloader == 'true'  ? "flex" : "none"}`,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",

  ".loaderSpin": {
    width: "60px",
    height: "60px",
    border: "5px solid rgba(52, 131, 250, 0.3)",
    borderTopColor: "rgba(52, 131, 250, 1)",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  "@keyframes spin": {
    to: {
      transform: "rotate(360deg)",
    },
  },
}));
export default StyledLoader;
