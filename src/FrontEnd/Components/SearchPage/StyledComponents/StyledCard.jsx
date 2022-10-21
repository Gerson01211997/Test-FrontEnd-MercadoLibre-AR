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
            margin: 0
        }
    },
    '.containerInfo':{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        position:'relative',
        '.provincia':{
            marginRight: 40
        }
    }
}));

export default StyledCard;
