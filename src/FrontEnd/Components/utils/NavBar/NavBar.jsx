import { Container } from '@mui/material';
import StyledNavBar from './StyledNavBar';
import {isMobile} from 'react-device-detect';
import DeskNav from './deskUtils/deskNav';
import MovNav from './movUtils/movilNav';
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