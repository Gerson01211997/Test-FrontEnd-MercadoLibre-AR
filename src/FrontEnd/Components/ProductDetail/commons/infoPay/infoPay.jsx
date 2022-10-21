import { Typography, ButtonBase } from '@mui/material'
import StyledInfoPay from './StyledInfoPay';
import { handleFormatPrice } from '../../../../lib/functions';
const InfoPay = ({...props}) => {
    return (
        <StyledInfoPay>
                <div>
                <Typography component='span' variant='caption'>
                    {`${props.item.condition === 'new'? 'Nuevo' : 'Usado'} - ${props.item.sold_quantity} vendidos`}
                </Typography>
                </div>
                <Typography component='h2' variant='h5'>
                    {props.item.title}
                </Typography>
                <Typography component='span' variant='h3' className="containerPrice">
                    {handleFormatPrice({price:props.item.price.amount, format:true})}
                    <Typography component='span' variant='caption' className="decimals">
                        {props.item.price.decimals.toFixed(1).split('.')}
                    </Typography>
                </Typography>
                <ButtonBase type="button" className="purchaseButton" aria-label='Boton comprar'>
                    Comprar
                </ButtonBase>
        </StyledInfoPay>
    )
}

export default InfoPay