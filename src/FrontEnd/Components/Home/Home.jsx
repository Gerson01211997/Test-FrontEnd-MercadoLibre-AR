import React from 'react'
import StyledHome from './StyledHome'
import { Typography } from '@mui/material'

const Home = () => {
    return(
        <StyledHome maxWidth="lg">
            <Typography variant="section" component="h2">
                Hola, ésta es la página de inicio
            </Typography>
        </StyledHome>
    )
}

export default Home