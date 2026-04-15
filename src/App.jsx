import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OrderFlow from './pages/OrderFlow';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderFlow />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
