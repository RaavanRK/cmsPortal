import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Switch, TableFooter, Pagination} from '@mui/material'
import React, { useState } from 'react';

function TableComponent(props) {
    const {header, rows} = props;
    
  return (
    <div >
        <TableContainer  >
            <Table sx={{width:'100%', }}  size='small' >
                <TableHead>
                    <TableRow>
                        {   header.map ((head, i)=> ( 
                            <TableCell key={i} sx={{fontWeight:'bold'}} align='center' > { head } </TableCell>
                         ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {    
                    rows?.map( (row, i) => (
                        <TableRow key={i}>
                            <TableCell align='center' > { row[1] } </TableCell>
                            <TableCell align='center' > {row[2] } </TableCell>
                            <TableCell align='center' > {new Intl.DateTimeFormat("en-GB",{ day: "numeric", month: "short", year: "numeric"} ).format(new Date(row[3])) } </TableCell>
                            <TableCell align='center' > <Switch size='small' />  </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
 
            </Table>
        </TableContainer>
    </div>
  )
}
// following is date formatter DD Mon YYYY (en-GB) .... Mon DD, YYYY (en-US)
// new Intl.DateTimeFormat("en-GB",{ day: "numeric", month: "short", year: "numeric"} ).format(new Date(row[3]))
export default TableComponent