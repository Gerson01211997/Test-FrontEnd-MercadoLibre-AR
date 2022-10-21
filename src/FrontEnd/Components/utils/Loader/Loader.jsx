import StyledLoader from "./styledLoader";
import { Box, Typography } from '@mui/material'

export default function Loader({ content, dataStyle }) {
  return (
    <StyledLoader showloader={dataStyle.toString()}>
      <Box className="loaderSpin"></Box>
      <Typography variant="subtitle1" component="p" >{content && content}</Typography>
    </StyledLoader>
  );
}