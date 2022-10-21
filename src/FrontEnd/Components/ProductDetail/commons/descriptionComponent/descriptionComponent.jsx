import { Typography, Box } from '@mui/material'
const DescriptionComponent = ({...props}) =>{
    return(
        <>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap:3,
            marginTop:5
        }}>
            <Typography component='h1' variant='h4'>
                Descripción del producto
            </Typography>
            <Typography component='p' variant='caption'>
                {props.description}
            </Typography>
        </Box>
        </>
    )
}

export default DescriptionComponent