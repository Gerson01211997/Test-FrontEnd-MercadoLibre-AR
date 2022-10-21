import { useEffect, useState } from 'react';
import { getProductDetail } from '../../services/getProductDetail';
import { useParams } from 'react-router-dom';
import StyledProductDetail from './StyledProductDetail'
import { Grid } from '@mui/material'
import ImageComponent from './commons/imageComponent/imageComponent'
import PayInfo from './commons/infoPay/infoPay'
import DescriptionComponent from './commons/descriptionComponent/descriptionComponent'
import Loader from '../utils/Loader/Loader'
import Breadcrumbs from '../utils/Breadcrumb/Breadcrumb';
const ProductDetail = () =>{
    const params = useParams();
    const [dataProduct, setDataProduct] = useState([])
    let Loading = Object.keys(dataProduct).length
    useEffect(()=>{
        const getProduct = async () => {
            setDataProduct(await getProductDetail({productId:params.id}))
        }
        getProduct();
        return () => {
            setDataProduct([]);
        };
    },[params])
    return(
        <>
            {Loading == 0 ? <Loader content={"Cargando Producto"} dataStyle={true}/> : (
                <>
                {dataProduct.categories && (<Breadcrumbs categories={dataProduct.categories}/>)}
                    <StyledProductDetail container>
                        <Grid item xs={8} className="containerInfo">
                            <ImageComponent imgUrl={dataProduct.item.picture.secure_url} title={dataProduct.item.title}/>
                            <DescriptionComponent description={dataProduct.item.description}/>
                        </Grid>
                        <Grid item xs={4}>
                            <PayInfo item={dataProduct.item}/>
                        </Grid>
                    </StyledProductDetail>
                </>
            )}
        </>
    )
}

export default ProductDetail