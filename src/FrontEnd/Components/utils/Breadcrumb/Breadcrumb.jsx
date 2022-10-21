import StyledBreadcrumb from './StyledBreadcrumb'
import { Typography } from '@mui/material'
const Breadcumb = ({categories}) =>{
    return(
        <StyledBreadcrumb>
            {
                categories?.map((item, key)=>{
                    return(
                        <Typography component={'p'} variant={'caption'} className='items' key={key}>
                            {item.name}
                        </Typography>
                    )
                })
            }
          
        </StyledBreadcrumb>
    )
}

export default Breadcumb