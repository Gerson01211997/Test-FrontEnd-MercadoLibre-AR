import SearchInput from '../utils/SearchInput'
import DesktopLogo from '../../../../Assets/images/logos/logoDesktop.png';

const DeskNav = () =>{
    return(
        <>
            <img src={ DesktopLogo } width={134} height={34} alt='Logo Escritorio MercadoLibre | Argentina'  />
            <SearchInput/>
        </>
    )
}

export default DeskNav