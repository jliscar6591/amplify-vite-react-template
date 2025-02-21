// src/pages/ClientsPage.tsx
import React, { useState } from 'react';
import {
  Sheet, Typography, Button, Table, DialogTitle, DialogContent, DialogActions, FormControl, FormLabel, Input,
  Box,
  Breadcrumbs,
  Link,
} from '@mui/joy';
import Dialog from '@mui/material/Dialog';
import Header from '../components/Header';
import OrderList from '../components/OrderList';
import OrderTable from '../components/OrderTable';
import Sidebar from '../components/Sidebar';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

interface Client {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const ClientsPage: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: 'John Doe', phone: '555-1234', email: 'john@example.com' },
  ]);

  // Form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleAddClient = () => {
    const newClient: Client = {
      id: clients.length + 1,
      name,
      phone,
      email,
    };
    setClients([...clients, newClient]);
    setOpenDialog(false);
    // reset
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <Sheet sx={{ p: 0 }}>
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon  />}
              sx={{ pl: 0 }}
            >
              <Link
                underline="none"
                color="neutral"
                href="/home"
                aria-label="Home"
              >
                <HomeRoundedIcon />
              </Link>
              <Link
                underline="hover"
                color="neutral"
                href="/agent/dashboard"
                sx={{ fontSize: 12, fontWeight: 500 }}
              >
                Dashboard
              </Link>
              <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
                Clients
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box
            sx={{
              display: 'flex',
              mb: 1,
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="h2" component="h1">
              Clients
            </Typography>
            <Button
              color="primary"
              startDecorator={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>}
              size="sm"
            >
              Add client
            </Button>
          </Box>
          <OrderTable />
          <OrderList />
        </Box>
      </Box>

   
      {/* <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Client</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>Phone</FormLabel>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="plain">Cancel</Button>
          <Button onClick={handleAddClient} variant="solid">Save</Button>
        </DialogActions>
      </Dialog> */}
    </Sheet>
  );
};

export default ClientsPage;
