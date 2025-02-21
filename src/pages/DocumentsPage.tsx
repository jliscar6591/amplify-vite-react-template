// src/pages/DocumentsPage.tsx
import React, { useState } from 'react';
import {
  Sheet, Typography, Button, Table, DialogTitle, DialogContent, DialogActions, FormControl, FormLabel, Input,
} from '@mui/joy';
import Dialog from '@mui/material/Dialog';

interface DocumentRequest {
  id: number;
  name: string;
  status: 'requested' | 'completed';
  file?: File | null;
}

const DocumentsPage: React.FC = () => {
  // Simulate user role or fetch from auth context
  const userRole = 'agent'; // 'buyer' | 'seller' | 'agent'
  
  const [documentRequests, setDocumentRequests] = useState<DocumentRequest[]>([
    { id: 1, name: 'W2', status: 'requested' },
    { id: 2, name: 'Pay Stubs', status: 'requested' },
  ]);
  
  const [openDialog, setOpenDialog] = useState(false);
  const [newDocName, setNewDocName] = useState('');

  // For file upload
  const handleFileUpload = (docId: number, file: File | null) => {
    setDocumentRequests((prev) =>
      prev.map((doc) =>
        doc.id === docId
          ? { ...doc, status: 'completed', file }
          : doc
      )
    );
  };

  // For agent - add new doc request
  const handleAddRequest = () => {
    const newDoc: DocumentRequest = {
      id: documentRequests.length + 1,
      name: newDocName,
      status: 'requested',
    };
    setDocumentRequests([...documentRequests, newDoc]);
    setOpenDialog(false);
    setNewDocName('');
  };

  return (
    <Sheet sx={{ p: 3 }}>
      <Typography level="h4" mb={2}>Documents</Typography>

      {userRole === 'agent' && (
        <Button onClick={() => setOpenDialog(true)} variant="solid" sx={{ mb: 2 }}>
          Request New Document
        </Button>
      )}

      <Table>
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Status</th>
            {userRole !== 'agent' && <th>Upload</th>}
          </tr>
        </thead>
        <tbody>
          {documentRequests.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.status}</td>
              {userRole !== 'agent' && (
                <td>
                  {doc.status === 'requested' ? (
                    <Input
                      type="file"
                      onChange={(e) => handleFileUpload(doc.id, e.target.files?.[0] || null)}
                    />
                  ) : (
                    <span>Completed</span>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Dialog for agent to add new doc request */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Request New Document</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>Document Name</FormLabel>
            <Input
              value={newDocName}
              onChange={(e) => setNewDocName(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="plain">Cancel</Button>
          <Button onClick={handleAddRequest} variant="solid">Request</Button>
        </DialogActions>
      </Dialog>
    </Sheet>
  );
};

export default DocumentsPage;
