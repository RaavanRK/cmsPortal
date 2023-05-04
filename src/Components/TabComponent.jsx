import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

function TabPanel(props){
  const {children, value, index, } = props;
  return(
    <div hidden={value !== index} >
      { value === index && (  
        <Box p={3} > {children } </Box>
      )}
    </div>
  )
}

function TabComponent(props) {
  const [value, setValue] = useState(0);

  const {tabs, width} = props;
  const handleChange = (event, newValue) => { setValue(newValue); }

  return (
    <div>
        <Box width={width} margin='auto' >
            <Box borderBottom='1' borderColor='divider' >
              <Tabs value={value} onChange={handleChange}
                    textColor='primary' indicatorColor='none'  >
                {  tabs.map( ({label}, i)=> 
                (  <Tab label={label} key={i} sx={{ textTransform:'none', fontWeight:'bold' }} />
                ))}
              </Tabs>
            </Box>
            <Box>
                { tabs.map( ({component}, i )=> (
                  <TabPanel value={value} key={i} index={i} >
                    {component}
                  </TabPanel>
                ))}
            </Box>
        </Box>
    </div>
  )
}

export default TabComponent