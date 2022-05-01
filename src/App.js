import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';

// Header Navigation

import Programm from './pages/Programm';
import Preise from './pages/Preise'
import Snacks from './pages/Snacks';
import Oeffnungszeiten from './pages/Zeiten';

// Footer Navigation

import Kontakt from './pages/FooterNav/Kontakt';
import Datenschutz from './pages/FooterNav/Datenschutz';
import Besuchsbedingungen from './pages/FooterNav/Besuchsbedingungen';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/programm' element={<Programm />} />
          <Route exact path='/preise' element={<Preise />} />
          <Route exact path='/snacks' element={<Snacks />} />
          <Route exact path='/zeiten' element={<Oeffnungszeiten />} />

          <Route exact path='/kontakt' element={<Kontakt />} />
          <Route exact path='/datenschutz' element={<Datenschutz />} />
          <Route exact path='/besuchsbedingungen' element={<Besuchsbedingungen />} />
        </Routes>
      </Router>
  );
}

export default App;
