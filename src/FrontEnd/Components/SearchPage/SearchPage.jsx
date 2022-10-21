import { useEffect, useState } from 'react';

import {Divider, Box} from '@mui/material';
import Container from './StyledSearchPage'
import Loader from '../utils/Loader/Loader'
import CardComponent from './components/CardComponent'
import BreadCrumb from '../utils/Breadcrumb/Breadcrumb'
import NotFound from '../utils/NotFound/NotFound'

import { getSearch } from '../../services/getSearch'
import { useAppSelector } from '../../lib/Hooks/redux';
import { selectSearch } from '../../lib/Redux/feature/searchReducer';

const SearchPage = () => {
    const dataSearch = useAppSelector(selectSearch)
    const [itemsSearch, setItemsSearch] = useState([])
    useEffect(()=>{
        const getProduct = async () => {
            setItemsSearch(await getSearch({queryData:dataSearch}))
        }
        getProduct();
        return () => {
            setItemsSearch([]);
        };
    },[dataSearch])
    return(
        <>
            <BreadCrumb categories={itemsSearch?.categories}/>
            <Container>
                {itemsSearch?.items?.length == 0 ? <NotFound/> : itemsSearch?.items  ? 

                (itemsSearch.items.map((item, key) =>{
                    return ( 
                        <Box key={key}>
                            {key > 0 && <Divider/>}
                            <CardComponent item={item}/> 
                        </Box>
                    )
                })) : 

                <Loader content={"Cargando resultados"} dataStyle={true}/>}
            </Container>
        </>
    )
}

export default SearchPage