import SearchInput from '../utils/SearchInput'
import MovilLogo from '../../../../Assets/images/logos/logoMovil.png';

const movilNav = () =>{
    return(
        <>
            <img src={MovilLogo} width={44} height={32} alt='Logo Móvil MercadoLibre | Argentina'  />
            <SearchInput/>
        </>
    )
}

export default movilNav