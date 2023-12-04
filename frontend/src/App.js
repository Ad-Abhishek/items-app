import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddScreen from './screens/AddScreen';
import Home from './components/Home';
import Items from './components/Items';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add" element={<AddScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
