// src/pages/DashboardBuyer.tsx
import React from 'react';
import { Typography, Sheet } from '@mui/joy';

const DashboardBuyer: React.FC = () => {
  return (
    <Sheet sx={{ p: 3 }}>
      <Typography level="h3" mb={2}>
        Buyer Dashboard
      </Typography>
      <Typography >
        Welcome, here are properties you might be interested in...
      </Typography>
      {/* Add relevant widgets or analytics for a buyer */}
    </Sheet>
  );
};

export default DashboardBuyer;
