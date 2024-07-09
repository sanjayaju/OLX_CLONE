// ProfilePage.js
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useClient } from 'next/client'; // Import useClient from next/client

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();
  useClient(); // Mark this component as client-side

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ProfilePage;