import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function AppbarComponent(props) {
  return (
    <div>
        <AppBar position='static' sx={{backgroundColor:'white'}}>
            <Toolbar>
                <Typography variant='h5' noWrap color='primary' sx={{fontFamily:'monospace', fontWeight:'600', 
                                    letterSpacing:'0.3rem',  
                                    marginLeft:'1.2rem' }} >
                    {props.logo}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default AppbarComponent