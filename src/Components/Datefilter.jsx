import { Box, Divider, Grid, InputLabel, Pagination, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ButtonComponent from './ButtonComponent';
import TableComponent from './TableComponent';
import ModalComponent from './ModalComponent';

const style={display:'flex', justifyContent:'space-between', padding:'4px'};

function Datefilter(props) {
    const {btnTitle, header, rows, ...other }= props;

    const [from,setFrom] = useState(null)
    const [to, setTo ] = useState(null);
    const [open, setOpen] = useState(false);
    const dummyData=JSON.parse(localStorage.getItem(btnTitle));
    const [data, setData] = useState(dummyData);

    const [ page, setPage] = useState(1);
    const [pageData, setPageData] = useState(data.slice(0, 6));

    const rowPerPage = 6;
    
    // useEffect(()=> {
    //     setData(JSON.parse(localStorage.getItem(btnTitle)))
    // },[])
    // date filter fn--------------------------------------------------------------
    useEffect( ()=>{ 
        if(from !== null && to !== null)
            { setData(data.filter(elem => new Date(from) < new Date(elem[3]) < new Date(to) ))}
        else if(from !== null)
            { setData( data.filter(elem => new Date(from) < new Date(elem[3]) ))}
        else if(to !== null)
            { setData(data.filter(elem => new Date(elem[3]) < new Date(to) ))}
     }, [from, to] );
       
     // ------------- following is the date formatter for the type  15 Aug 1947 (en-GB)----- Aug 15, 1947 (en-US)
    //  console.log(new Intl.DateTimeFormat("en-GB",{ day: "numeric",  
    //          month: "short",
    //           year: "numeric"} ).format(new Date("2023-08-02")));

    const handleClose=()=>{ setOpen(false)}  
     const saveData =()=>{ setData(JSON.parse(localStorage.getItem(btnTitle)))}

    const handleChange=(event, page)=>{  
        setPage(page);
        setPageData( data.slice( page*rowPerPage - rowPerPage , page*rowPerPage ) );
           
    }
   

  return (
    <div  >
        <Box sx={style}  >
            <Grid container spacing={2} ml={1} >
                <Grid item textAlign={'left'}>
                    <InputLabel>From</InputLabel>
                    <TextField type='date' value={from} size='small'
                                onChange={(e)=>setFrom( e.target.value)} ></TextField>
                </Grid>

                <Grid item textAlign={'left'}>
                    <InputLabel>To</InputLabel>
                    <TextField type='date' value={to} size='small'
                                onChange={(e)=>setTo(e.target.value)} ></TextField>
                </Grid>
            </Grid >

            <Grid width='50%' mr={3} sx={{display:'flex', justifyContent:'flex-end', alignItems:'center' }}  >
                <ButtonComponent title={btnTitle} onBtnclick={()=>setOpen(!open)} />
            </Grid>
        </Box>
        <Divider  />
        { open && <ModalComponent open={open} handleClose={handleClose}
                 subH1={header[1]} heading={btnTitle}  saveData={saveData}
                  /> }

        <TableComponent  header={header} rows={pageData} />

        <Stack  sx={{display:'flex', justifyContent:'center', alignItems:'center', padding:'14px' }} >
            <Pagination count={ Math.ceil( data.length/6 ) } color="primary" page={page}
                     defaultPage={1} onChange={handleChange} size='small' />
        </Stack>
    </div >
  )
}

export default Datefilter