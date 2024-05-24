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
import Header from './Header';
import { getClients } from '../../services/ClientService';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';

const Menu : React.FC<MenuProps> = ({ container, drawerWidth }) => {
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
    <Box sx={{backgroundColor: 'primary.main', height:'100%', color: '#fff'}}>
      <Toolbar>
      <Typography className='menuHeader' noWrap>
        <Stack direction="row" alignItems="center" gap={1}>
          <AccountCircleIcon fontSize='large'/>
          CLIENTES
        </Stack>
      </Typography>
        </Toolbar>
      
      <Divider sx={{borderColor:'white'}}/>
      <List sx={{
          '&& .Mui-selected':{
          bgcolor: 'primary.light',
          color: 'secondary.dark'
          },
          '&& .Mui-selected:hover':{
            backgroundColor: 'primary.dark',
            color: '#fff',
          }
        }}>
        <ListItem key={0} disablePadding>
          <ListItemButton onClick={() => handleSelectItem(0)} selected={selectedItem === 0}>
            <ListItemText primary='test' sx={{pl:1}}/>
          </ListItemButton>
        </ListItem>
        <Divider sx={{borderColor:'white', opacity: .1}}/>
        {clients && clients.map((client) => (
          <div key={client.id}>
            <ListItem key={client.id} disablePadding >
              <ListItemButton onClick={() => handleSelectItem(client.id)} selected={selectedItem === client.id}>
                <ListItemText primary={client.name} sx={{pl:1}} />
              </ListItemButton>
            </ListItem>
            <Divider sx={{borderColor:'white', opacity: .1}}/>
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