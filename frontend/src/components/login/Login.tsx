import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginData } from '../../services/Interfaces';
import { login } from '../../services/LoginService';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginData: LoginData = {
      email: email,
      password: password,
    };
    try {
      const token = await login(loginData);
      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      setShowAlert(true);
      setError('Error al iniciar sesión')
    }
  };

    const autoLogin = async () => {
      const loginData: LoginData = {
        email: 'reactdev@iniceptia.ai',
        password: '4eSBbHqiCTPdBCTj',
      };
      try {
        const token = await login(loginData);
        localStorage.setItem('token', token);
        navigate('/');
      } catch (error) {
        setShowAlert(true);
        setError('Error al iniciar sesión')
      }
    };

  return (
    <Box
        sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
    >
        <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1, width: 400 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}        />
          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
          />
          <Collapse in={showAlert}>
            <Alert severity="error" sx={{mt:2}} action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
              {error}
            </Alert>
          </Collapse>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
          >
              Iniciar sesión
          </Button>
          <Button
              fullWidth
              variant="contained"
              onClick={autoLogin}
          >
              AutoLogin
          </Button>

        </Box>
    </Box>
  );
}

export default Login