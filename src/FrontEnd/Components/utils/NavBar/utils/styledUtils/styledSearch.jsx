import { styled } from "@mui/material/styles";
import {InputBase} from "@mui/material";

const StyledSearch = styled(InputBase)(() => ({
    input:{
        background: 'rgba(255,255,255, 1) !important',
        boxShadow:' 0 1px 2px 0 rgb(0 0 0 / 20%)',
        padding: '10px !important',
        bordeRadius: 2,
        color: '#333 !important',
        fontSize: '16px !important',
    },
    '.containerIcon':{
        background: '#ebebeb',
        height: '100%',
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 20%)',
    }
}));

export default StyledSearch;
