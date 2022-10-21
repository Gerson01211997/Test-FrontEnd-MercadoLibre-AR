import { styled } from "@mui/material/styles";
import {Box} from "@mui/material";

const StyledInfoPay = styled(Box)(() => ({
    padding:10,
    background:'rgba(255,255,255, 1)',
    display:'flex',
    flexDirection:'column',
    gap:10,
    '.containerPrice':{
        display:'flex',
        gap:2,
        '.decimals':{
            fontSize: '1.5rem !important',
        }
    },
    '.purchaseButton':{
        marginTop:20,
        background:'rgba(52, 131, 250, 1)',
        padding:20,
        borderRadius:5,
        color:'rgba(255 ,255, 255, 1)'
    }
}));

export default StyledInfoPay;
