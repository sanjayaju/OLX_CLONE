import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Snapsphere</Typography>
        {user ? (
          <>
            <Button color="inherit" onClick={() => router.push('/profile')}>
              Profile
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={() => router.push('/login')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => router.push('/register')}>
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
