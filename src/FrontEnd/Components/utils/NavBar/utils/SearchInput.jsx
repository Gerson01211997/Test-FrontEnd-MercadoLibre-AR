import { useEffect } from 'react';
import { useState } from 'react'
import InputBase from './styledUtils/styledSearch'
import { ButtonBase } from '@mui/material'
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from '../../../../lib/Hooks/redux';
import { setDataSearch } from '../../../../lib/Redux/feature/searchReducer';
import { useSearchParams } from 'react-router-dom';

const SearchInput = () =>{
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [valueSearch, setValueSearch] = useState('')
    let params = searchParams.get('search')
    useEffect(()=>{
        //Aquí siempre estoy a la escucha de la url para dejar la búsqueda guardada dentro del 
        // cajón de búsqueda aunque el usuario regrese o refresque la página;
        // También lo almaceno en redux para tener un estado general
        setValueSearch(params == null ? '' : params)
        dispatch(setDataSearch({search:params}))
    },[params])
    const iconSearch = () =>{
        return(
            <ButtonBase name='Botón buscar' aria-label="Botón buscar" className='containerIcon' onClick={SetSearch}>
                <SearchIcon/>
            </ButtonBase>
        )
    }
    const SetSearch = () =>{
        dispatch(setDataSearch({search:valueSearch}))
        navigate(`/items?search=${valueSearch}`)
    }
    return(
        <>
            <InputBase
                placeholder="Nunca dejes de buscar"
                fullWidth
                onKeyPress={(event) => {
                    if (event.key === 'Enter')
                        SetSearch()
                    }}
                endAdornment={
                    iconSearch()
                }
                onFocus={(e)=>{
                    if(e.target.value == valueSearch) {
                        setValueSearch(e.target.value);
                      }
                }}
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
            />
        </>
    )
}

export default SearchInput