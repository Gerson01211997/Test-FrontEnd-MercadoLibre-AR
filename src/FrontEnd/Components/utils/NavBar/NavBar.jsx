import { Container } from '@mui/material';
import StyledNavBar from './StyledNavBar';

import {isMobile} from 'react-device-detect';

import DeskNav from './deskUtils/deskNav';
import MovNav from './movUtils/movilNav';

// Uso la biblioteca de react-device-detect para renderizar 
// desde el servidor si es un dispositivo móvil o de escritorio y 
// enviar el componente necesario y así, evitar el uso de media queries 
// para mostrar contenido; también se puede añadir un hook para que siempre
// esté escuchando el ancho de la pantalla y realizar de manera dinámica sin refrescar la página


//En este componente creo todas las carpetas (componentes) necesarios que estarían dentro del navbar y así estar centralizado en un lugar
const NavBar = () => {
    return(
        <StyledNavBar position='relative'>
            <Container maxWidth='lg' className='containerNavBar'>
                {isMobile ? <MovNav/> : <DeskNav/>}
            </Container>
        </StyledNavBar>
    )
}

export default NavBar