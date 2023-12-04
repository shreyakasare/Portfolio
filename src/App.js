import './App.css';
import CycleThrough from './Components/CycleThrough';
import React, { useState } from 'react';
import MyTable from './Components/MyTable';
import DataTable from './Components/DataTable';
import ParentComponent from './Components/ParentComponent';
import MatTable from './Components/MatTable';
import NavigationBar from './Components/NavigationBar';
import NavBar from './Components/NavBar';

// import MyDialog  from './Components/MyDialog'import MyTable from './Components/MyTable';

const App = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
    setDialogOpen(false);
  };

  // Your data
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 35 },
    // { id: 1, name: 'Item 1' },
    // { id: 2, name: 'Item 2' },
    // Add more items
  ];

  return (
    <div>
      <NavBar/>
      {/* <NavigationBar/> */}
   
        {/* <MatTable data={data} /> */}
      {/* <DataTable/> */}
      
      {/* <ParentComponent/> */}
     {/* <CycleThrough/>  */}
{/* <MyTable/> */}
      {/* <MyTable data={data} handleOpenDialog={handleOpenDialog} /> */}
      {/* <MyDialog open={isDialogOpen} handleClose={handleCloseDialog} selectedItem={selectedItem} /> */}
    </div>
  );
};

export default App;
