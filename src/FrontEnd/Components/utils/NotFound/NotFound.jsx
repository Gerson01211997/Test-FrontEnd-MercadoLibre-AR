import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Typography } from '@mui/material';
import StyledNotFound from './StyledNotFound'
const NotFound = () =>{
    return(
        <StyledNotFound>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: 40 }} />
            <Typography component={'span'} variant={'h5'}> 
                Disculpa las molestias, no tenemos lo que buscas, prueba con otras palabras
            </Typography>
        </StyledNotFound>
    )
}

export default NotFound