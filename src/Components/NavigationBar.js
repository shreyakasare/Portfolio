import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CycleThrough from './CycleThrough';
import DataTable from './DataTable';
import MatTable from './MatTable';
import MyTable from './MyTable';

function NavigationBar() {
  return (
    <AppBar position="static">
    <Toolbar>
    <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="about" element={<MatTable />} />
        <Route path="order-summary" element={<MyTable />} />
        </Routes>
     
      <Button color="inherit" component={DataTable} to="/services">
        Services
      </Button>
      <Button color="inherit" component={Link} to="/contact">
        Contact
      </Button>
    </Toolbar>
  </AppBar>
  );
}

export default NavigationBar;
