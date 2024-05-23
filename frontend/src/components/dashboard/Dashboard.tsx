import React from 'react'
import { useTheme } from '@mui/material/styles';
import Menu from '../menu/Menu'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DatePicker from './DatePicker';
import ClientGrid from './ClientGrid';

const Dashboard = () => {
  const theme = useTheme();
  const drawerWidth = 240;

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Menu container={document.body} drawerWidth={drawerWidth}/>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: '64px', ml: 'auto' }}
      >
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box style={{display:'flex'}}>
            <Typography  sx={{mr:2}}>
              Detalle
            </Typography>
            <Typography color={theme.palette.text.disabled} >
              Dashboards
            </Typography>
          </Box>          
          <DatePicker />
        </Box>
        <ClientGrid />
      </Box>
    </Box>
  )
}

export default Dashboard