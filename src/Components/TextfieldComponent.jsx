import { TextField } from '@mui/material'
import React from 'react'

function TextfieldComponent(props) {
    const {variant='outlined', error=false, helperText='field is required', multiline=false,
       defValue='default value', val,onchange=()=>{} } = props;
  return (
    <div>
        <TextField variant={variant} error={error} helperText={error && helperText}
              multiline={multiline} rows={8}  fullWidth size='small' 
              placeholder={defValue} value={val} onChange={onchange}
              sx={{marginBottom:'8px'}} ></TextField>
    </div>
  )
}

export default TextfieldComponent