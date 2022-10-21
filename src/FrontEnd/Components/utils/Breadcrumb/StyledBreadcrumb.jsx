import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";

const StyledBreadcrumb = styled(Box)(() => ({
    padding:'15px 0',
    display:'flex',
    flexDirection:'row',
    gap:5,
    '.items':{ 
        color:'#666',
        ':last-child':{
            fontWeight:'bold'
        },
        ':not(:last-child):after':{
            content: '" > "'
        }
    }
}));

export default StyledBreadcrumb;
