import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import HomePage from "./HomePage";
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter basename='/Kavin-Portfolio'>
      <div className="app-container">
        <NavBar />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;