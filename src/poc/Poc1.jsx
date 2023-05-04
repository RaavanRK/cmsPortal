
import TabComponent from '../Components/TabComponent';
import { Box } from '@mui/material';
import Datefilter from '../Components/Datefilter';
import AppbarComponent from '../Components/AppbarComponent';
import { useEffect } from 'react';

const blogHeader = [ 'Sl. No.', 'Blog Name', 'Created Date', 'Publish/ Unpublish' ];
const blogRow = [ {1:1, 2: 'Java Technologies', 3:'2022-08-23', 5:'a'},
           {1:2, 2: 'MERN', 3:'2022-08-17', 5:'a'} , 
           {1:3, 2: 'Java Technologies', 3:'2022-08-23', 5:'a'},
          {1:4, 2:'sample data', 3:'2022-08-12', 5:'content'},
          {1:5, 2: 'sample data', 3: '2022-08-20', 5:'content '},
          {1:6, 2: 'sample data', 3: '2022-09-23', 5:'content'},
          {1:7, 2:'sample data', 3: '2021-07-17', 5:'content'},
          {1:8, 2: 'sample data', 3: '2022-08-20', 5:'content '},
          {1:9 , 2:'sample data', 3: '2023-02-17', 5:'content'},
          {1:10 , 2: 'MERN', 3:'2022-08-17', 5:'a'},
          {1:11 , 2: 'Java Technologies', 3:'2022-08-23', 5:'a'},
          {1:12 , 2:'sample data', 3: '1995-08-23', 5:'content'},
          {1:13 , 2:'sample data', 3:'2022-08-12', 5:'content'} ];
const seminarHeader = [ 'Sl. No.', 'Seminar Name', 'Created Date', 'Publish/ Unpublish' ];
const seminarRow = [ {1:1 ,2: 'Java', 3:'2022-08-23', 5:'a'}, {1:2 , 2: 'MERN', 3:'2022-08-17', 5:'a'},
           {1:3 , 2: 'Java', 3:'2022-08-23', 5:'a'}, ];

const blog = <Box width='100%' sx={{border:'1px solid grey', borderRadius:'8px', boxShadow:''}}>
    <Datefilter header={blogHeader} rows={blogRow} btnTitle='Create Blog' />
</Box>;

const seminar = <Box width='100%' sx={{border:'1px solid grey', borderRadius:'8px', boxShadow:''}}>
    <Datefilter header={seminarHeader} rows={seminarRow} btnTitle='Create Seminar' />
    {/* <Divider />
    <TableComponent header={seminarHeader} rows={seminarRow} /> */}
</Box>;

const tab = [ {label:'Blog', component : blog },
               {label:'Seminar', component: seminar  } ];

function Poc1() {
  
  localStorage.setItem("Create Seminar", JSON.stringify(seminarRow));
  localStorage.setItem("Create Blog", JSON.stringify(blogRow));
  console.log('local storage created')

  return (
    <div>
      {/* <Context.Provider value={[st, setSt]} > */}
        <AppbarComponent logo='LOGO' />
        <TabComponent tabs={tab} width='95%' />
      
    </div>
  )
}

export default Poc1