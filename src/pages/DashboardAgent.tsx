// src/pages/DashboardAgent.tsx
import React from 'react';
import { Typography, Sheet, Box } from '@mui/joy';

const DashboardAgent: React.FC = () => {
    // Example analytics placeholders
    const totalProperties = 8;
    const totalClients = 4;
    const propertyStatuses = {
        listed: 5,
        underContract: 2,
        sold: 1,
    };

    return (
        <Sheet sx={{ p: 3 }}>
            <Typography level="h3" mb={2}>
                Agent Dashboard
            </Typography>
            <Box>
                <Typography mb={1}>Total Properties: {totalProperties}</Typography>
                <Typography mb={1}>Total Clients: {totalClients}</Typography>
                <Typography mb={1}>Listed: {propertyStatuses.listed}</Typography>
                <Typography mb={1}>Under Contract: {propertyStatuses.underContract}</Typography>
                <Typography mb={1}>Sold: {propertyStatuses.sold}</Typography>
            </Box>
        </Sheet>
    );
};

export default DashboardAgent;
