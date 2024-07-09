import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';
import { useClientRouter as useRouter } from 'next/navigation'; // Use useClientRouter instead

const Layout = ({ children }) => {
  const { user, logout } = React.useContext(AuthContext);
  const router = useRouter(); // Use useClientRouter instead

  return (
    <>
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
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
