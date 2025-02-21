// src/pages/ProfilePage.tsx
import React, { useState } from 'react';
import {
  Sheet, Typography, FormControl, FormLabel, Input, Button,
} from '@mui/joy';

const ProfilePage: React.FC = () => {
  const [name, setName] = useState('Jane Doe');
  const [phone, setPhone] = useState('555-1212');
  const [email, setEmail] = useState('jane@example.com');

  const handleUpdateProfile = () => {
    // handle saving the updated profile info
    alert('Profile updated!');
  };

  return (
    <Sheet sx={{ p: 3 }}>
      <Typography level="h4" mb={2}>Update Profile</Typography>
      <FormControl sx={{ mb: 2 }}>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl sx={{ mb: 2 }}>
        <FormLabel>Phone</FormLabel>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </FormControl>
      <FormControl sx={{ mb: 2 }}>
        <FormLabel>Email</FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <Button onClick={handleUpdateProfile} variant="solid">
        Save
      </Button>
    </Sheet>
  );
};

export default ProfilePage;
