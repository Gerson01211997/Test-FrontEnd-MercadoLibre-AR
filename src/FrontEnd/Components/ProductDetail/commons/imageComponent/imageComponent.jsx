import Image from 'mui-image'
import {Box} from '@mui/material'

const ImageComponent = ({...props}) =>{
    return(
        <Box>
         <Image src={props.imgUrl} alt={`Producto MercadoLibre Argentina ${props.title}`} showLoading={true} errorIcon={ true } fit='contain' 
                easing='linear' shift={null} distance="1000px" shiftDuration={300}/>
        </Box>
    )
}

export default ImageComponent