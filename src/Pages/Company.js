import React from 'react'
import TabComponent from '../Components/TabComponent'
import { Box, Typography } from '@mui/material'
import TableComponent from '../Components/TableComponent';

const comp =  <Box ><Typography variant='h4'>this also a component </Typography> </Box>;
const tabs= [ {label:'a', component: (<h1>hello, this is a component </h1>)}, 
{label: 'b', component: comp }, 
{label: 'c', component: 'C'}];
const Company = () => {
  return (
    <div>
      <TabComponent tabs={tabs} />
      
    </div>
  )
}

export default Company