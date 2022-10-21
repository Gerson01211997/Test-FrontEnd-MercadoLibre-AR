// 
import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";

const StyledSearchPage = styled(Box)(() => ({
    background:'rgba(255,255,255, 1)',
    borderRadius:10,
    hr:{
        width: '98%',
        margin: 'auto',
        borderColor: 'rgba(0, 0, 0, 0.05) !important'
    }
}));

export default StyledSearchPage;
