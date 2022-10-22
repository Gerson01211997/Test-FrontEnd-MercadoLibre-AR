import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

const StyledCard = styled(ButtonBase)(() => ({
    justifyContent: 'flex-start',
    width: '100%',
    padding: '5px 10px',
    gap:15,
    '.containerImage':{
        width:150,
        height:150,
        img:{
            maxWidth: '100%',
            height: 'auto',
            padding: 0,
            margin: 0,
            borderRadius:4
        }
    },
    '.containerInfo':{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        position:'relative',
        img:{
            marginLeft:5,
            width:18,
            height:18
        },
        '.provincia':{
            marginRight: 40
        }
    }
}));

export default StyledCard;
