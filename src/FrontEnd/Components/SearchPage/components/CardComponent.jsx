import { Typography, Box } from '@mui/material'
import Container from '../StyledComponents/StyledCard'
import Image from 'mui-image'
import { handleFormatPrice } from '../../../lib/functions'
import { Link } from 'react-router-dom';
import FreeShipping from '../../../Assets/Images/Icons/iconShipping.png'
const CardComponent = ({...props}) => {
    return(
        <Link to={`/items/${props.item.id}`} style={{textDecoration: 'none', color: 'black'}}>
            <Container className='searchItems'>
                <Box className='containerImage'>
                    <Image src={props.item.thumbnail} alt={`Producto MercadoLibre Argentina ${props.item.title}`} showLoading={true} errorIcon={ true } fit='contain' 
                    easing='linear' shift={null} distance="1000px" shiftDuration={300}/>
                </Box>
                <Box className='containerInfo'>
                    <Typography variant="h5" component="h1" align="left">
                        {handleFormatPrice({price:props.item.price, format:true})}
                        {props.item.free_shipping && <img src={FreeShipping} alt='envío grátis mercado libre'/>}
                    </Typography>
                    <Typography variant="subtitle2" component="p" align="right" className='provincia'>
                        {props.item.address.city_name}
                    </Typography>
                    <Typography variant="h6" component="h2" align="left">
                        {props.item.title}
                    </Typography>
                </Box>
            </Container>
        </Link>
    )
}

export default CardComponent
