// src/pages/DashboardSeller.tsx
import React from 'react';
import { Typography, Sheet } from '@mui/joy';

const DashboardSeller: React.FC = () => {
  return (
    <Sheet sx={{ p: 3 }}>
      <Typography level="h3" mb={2}>
        Seller Dashboard
      </Typography>
      <Typography level="h3">
        Here is the status of your listed properties...
      </Typography>
      {/* Add relevant widgets or analytics for a seller */}
    </Sheet>
  );
};

export default DashboardSeller;

