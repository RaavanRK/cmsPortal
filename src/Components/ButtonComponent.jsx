import { Button } from '@mui/material'
import React from 'react'

function ButtonComponent(props) {
    const {title='btn', size='small', onBtnclick=()=>{}, variant='contained',  } = props;
  return (
    <div>
        <Button variant={variant} size={size} sx={{textTransform:'none' }} 
                    onClick={onBtnclick} > {title} </Button>
    </div>
  )
}

export default ButtonComponent