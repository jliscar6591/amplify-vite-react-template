// src/pages/PropertiesPage.tsx
import React, { useState } from 'react';
import {
  Sheet, Typography, Button, Table, DialogTitle, DialogContent, DialogActions, FormControl, FormLabel, Input,
} from '@mui/joy';
import Dialog from '@mui/material/Dialog';

interface Property {
  id: number;
  address: string;
  city: string;
  state: string;
  price: number;
}

const PropertiesPage: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [properties, setProperties] = useState<Property[]>([
    { id: 1, address: '123 Main St', city: 'New York', state: 'NY', price: 500000 },
  ]);

  // Form fields
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProperty = () => {
    const newProperty: Property = {
      id: properties.length + 1,
      address,
      city,
      state,
      price: Number(price),
    };
    setProperties([...properties, newProperty]);
    setOpenDialog(false);
    // Reset fields
    setAddress('');
    setCity('');
    setState('');
    setPrice('');
  };

  return (
    <Sheet sx={{ p: 3 }}>
      <Typography level="h4" mb={2}>Property List</Typography>
      <Button onClick={() => setOpenDialog(true)} variant="solid" sx={{ mb: 2 }}>
        Add Property
      </Button>

      {/* Table of properties */}
      <Table>
        <thead>
          <tr>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id}>
              <td>{prop.address}</td>
              <td>{prop.city}</td>
              <td>{prop.state}</td>
              <td>{prop.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Property Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Property</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>Address</FormLabel>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>City</FormLabel>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>State</FormLabel>
            <Input
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="plain">Cancel</Button>
          <Button onClick={handleAddProperty} variant="solid">Save</Button>
        </DialogActions>
      </Dialog>
    </Sheet>
  );
};

export default PropertiesPage;
