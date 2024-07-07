import React from 'react';
import { Box, Typography, Select, MenuItem, FormControl, RadioGroup, FormControlLabel, Radio, Alert, Grid } from '@mui/material';

const WalletSelection = () => {
  const [wallet, setWallet] = React.useState('ETH');
  const [network, setNetwork] = React.useState('Arbitrum One');
  const [receiveType, setReceiveType] = React.useState('Crypto');

  const handleWalletChange = (event) => {
    setWallet(event.target.value);
  };

  const handleNetworkChange = (event) => {
    setNetwork(event.target.value);
  };

  const handleReceiveTypeChange = (event) => {
    setReceiveType(event.target.value);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: 'black', color: 'white', borderRadius: 2, width: 400, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Select wallet
      </Typography>
      <Box display="flex" alignItems="center" mb={3}>
        <img src="/eth.png" alt="ETH" style={{ marginRight: 8, width: 24, height: 24 }} /> {/* Replace with actual path to ETH icon */}
        <Typography variant="body1">ETH</Typography>
        <Typography variant="body1" sx={{ marginLeft: 'auto' }}>0.00000000</Typography>
      </Box>
      
      <Typography variant="h6" gutterBottom>
        Select network
      </Typography>
      <FormControl fullWidth margin="normal">
        <Select value={network} onChange={handleNetworkChange} sx={{ color: 'white', backgroundColor: '#333', borderRadius: 1 }}>
          <MenuItem value="Arbitrum One">Arbitrum One</MenuItem>
          {/* Add other network options here */}
        </Select>
      </FormControl>
      
      <Typography variant="h6" gutterBottom>
        Type of receive
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={receiveType} onChange={handleReceiveTypeChange}>
          <FormControlLabel value="Crypto" control={<Radio sx={{ color: 'white' }} />} label="Crypto" />
          <FormControlLabel value="Fiat" control={<Radio sx={{ color: 'white' }} />} label="Fiat" disabled />
        </RadioGroup>
      </FormControl>
      
      <Alert severity="warning" sx={{ mt: 3, backgroundColor: '#422', color: 'white', borderRadius: 1 }}>
        To receive via fiat, please complete the KYC verification process
      </Alert>
    </Box>
  );
};

export default WalletSelection;
