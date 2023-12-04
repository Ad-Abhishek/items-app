import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AddScreen from './screens/AddScreen';
// import Home from './components/Header';
import Items from './components/Items';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <Header />
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/items" element={<Items />} />
          <Route path="/add" element={<AddScreen />} />
        </Routes>
    </>
    
  );
};

export default App;
