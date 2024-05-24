import React, { useState } from 'react';
import { HeaderProps } from '../../services/Interfaces';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC<HeaderProps> = ({ drawerWidth, handleDrawerToggle }) => {
  const [inputValue, setInputValue] = useState<string>('');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      color='inherit'
      elevation={0}
      >
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography noWrap component="div">
          REPORTES
        </Typography>
        <Box sx={{ border: '.5px solid var(--text-ultra-light)',
          borderRadius: '5px',
          width: 'auto',
            position: 'relative',
          }}>
          <InputBase
            placeholder="ID Caso, ID Cliente o Tel"
            inputProps={{ 'aria-label': 'search'}}
            sx={{
              padding: '0 10px',
              '& .css-1kl3j3q-MuiInputBase-input': { fontSize: '12px !important' },
            }}
            value={inputValue}
            onChange={handleChange}
        />
          <IconButton edge="start" color="inherit" aria-label="search" >
            <SearchIcon color='disabled'/>
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default Header