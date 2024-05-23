import React, { useEffect, useState } from 'react';
import { MenuProps, ClientDataInterface } from '../../services/Interfaces';
import { useDashboardContext } from '../../context/Context';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';  
import Header from './Header';
import { getClients } from '../../services/ClientService';

const Menu : React.FC<MenuProps> = ({ container, drawerWidth }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [clients, setClients] = useState<ClientDataInterface[] | null>();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { setClientId } = useDashboardContext();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getClients();
        setClients(data)
      } catch (error) {
        console.error('Error al obtener clientes:', error);
      }
    };
    getData();
  }, []);
  
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleSelectItem = (id : number) => {
    setSelectedItem(id);
    setClientId(id)
  }

  const drawer = (
    <Box sx={{backgroundColor: theme.palette.secondary.light, height:'100vh'}}>
      <Toolbar>
      <Typography className='menuHeader' noWrap>
        CLIENTES
      </Typography>
        </Toolbar>
      
      <Divider sx={{borderColor:'white'}}/>
      <List>
        <ListItem key={0} disablePadding>
          <ListItemButton onClick={() => handleSelectItem(0)} sx={{
              '&.Mui-selected': {
                borderRight: `3px solid ${theme.palette.secondary.dark}`,
                color: theme.palette.secondary.dark,
                backgroundColor: theme.palette.secondary.main,
              },
              }}
              selected={selectedItem === 0}>
            <ListItemText primary='test' />
          </ListItemButton>
        </ListItem>
        <Divider sx={{borderColor:'white'}}/>
        {clients && clients.map((client) => (
          <div key={client.id}>
            <ListItem key={client.id} disablePadding >
              <ListItemButton onClick={() => handleSelectItem(client.id)} sx={{
                '&.Mui-selected': {
                  borderRight: `3px solid ${theme.palette.secondary.dark}`,
                  color: theme.palette.secondary.dark,
                  backgroundColor: theme.palette.secondary.main
                }
                }}
                selected={selectedItem === client.id}
                color='secondary'>
                <ListItemText primary={client.name} />
              </ListItemButton>
            </ListItem>
            <Divider sx={{borderColor:'white'}}/>
          </div>
          
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          className='drawer'
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
          className='drawer'
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Menu