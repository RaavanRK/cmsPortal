import { Box, Divider, IconButton, InputLabel, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ButtonComponent from './ButtonComponent';
import TextfieldComponent from './TextfieldComponent';

const initialFirst = {1:null ,2:'', 3:'', 5:''};
const date = new Date();
const dt = `${date.getFullYear()}-${date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1 }-${date.getDate()}`;

function ModalComponent(props) {
    const {heading='heading', subH1='sub1',
     open=true, handleClose=()=>{}, saveData=()=>{}, ...other} = props;

     const [first, setFirst] = useState({1:null ,2:'',3:dt ,5:''});
    const [nameErr,setNameErr ] = useState(false);
    const [contErr,setContErr ] = useState(false);
    // const [temp, setTemp] = useState(JSON.parse(localStorage.getItem(heading)))
    const temp = JSON.parse(localStorage.getItem(heading));

    const validate=(first)=>{
        if(first[2] == '' && first[5] =='') {    setNameErr(true); setContErr(true); return false; }
        else if(first[2] == '' && first[5] !== '') { setNameErr(true); return false;  } 
        else if(first[2] !== '' && first[5] == '') {    setContErr(true); return false; }
        else {  
            temp.push(first);
              return true; }    }
        
    const handleSave=()=>{ 
            if(validate(first))
            {   
                localStorage.setItem( heading, JSON.stringify(temp));  
                handleClose(); 
                saveData();
            }
    }
    const handleClear=()=>{ 
        setFirst(initialFirst);    setContErr(false); setNameErr(false);  }                      

  return (
    <div>
        <Modal open={open} onClose={handleClose} >
            <Box sx={{  position:'absolute', top:'50%', left:'50%', width:'500px',
                    transform:'translate(-50%, -50%)' ,
                    border:'1px solid white', borderRadius:'10px',
                    boxShadow:24, bgcolor:'white' }}>

                <Box direction='row' display='flex' justifyContent='space-between' m={1} >
                    <Typography variant='h6' color={'blue'} > {heading} </Typography>
                    <IconButton onClick={handleClose} color='primary' > <CloseIcon /> </IconButton>
                </Box>
                <Divider />
                <Box  margin='5px 0px' p={1} >
                    <InputLabel error={nameErr} > {subH1} </InputLabel>
                    <TextfieldComponent val={first[2]} onchange={(e)=>setFirst({...first, 1:temp.length+1, 2:e.target.value})}
                                error={nameErr} defValue={'enter blog name'} />

                    <InputLabel error={contErr}  > {'content'} </InputLabel>
                    <TextfieldComponent multiline={true}  val={first[5]} error={contErr}
                            onchange={(e)=>setFirst({...first,5:e.target.value})} 
                            defValue={'type here...'} />
                </Box>
                <Stack  direction='row-reverse' p={1} spacing={2} >
                    <ButtonComponent title='save' onBtnclick={()=>{handleSave(); }} />
                    <ButtonComponent title='clear' variant='outlined' onBtnclick={handleClear} />
                </Stack>
            </Box>
        </Modal>
    </div>
  )
}

export default ModalComponent