import { useState, useEffect } from 'react';
import './App.css';
import Button from './componets/Button/Button';
import Display from './componets/Display/Display';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SamplePage from './pages/SamplePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample-page" element={<SamplePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
