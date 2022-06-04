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
import Jugendschutz from './pages/FooterNav/Jugendschutz';
import Besuchsbedingungen from './pages/FooterNav/Besuchsbedingungen';
import Schule from './pages/FooterNav/Schule';
import Presse from './pages/FooterNav/Presse';
import Newsletter from './pages/FooterNav/Newsletter';

import LoginSystem from './pages/Anmelden';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/programm' element={<Programm />} />
          <Route exact path='/preise' element={<Preise />} />
          <Route exact path='/snacks' element={<Snacks />} />
          <Route exact path='/zeiten' element={<Oeffnungszeiten />} />

          <Route exact path='/signin' element={<LoginSystem />} />

          <Route exact path='/kontakt' element={<Kontakt />} />
          <Route exact path='/datenschutz' element={<Datenschutz />} />
          <Route exact path='/jugendschutz' element={<Jugendschutz />} />
          <Route exact path='/besuchsbedingungen' element={<Besuchsbedingungen />} />
          <Route exact path='/schule' element={<Schule/>} />
          <Route exact path='/presse' element={<Presse/>} />
          <Route exact path='/newsletter' element={<Newsletter/>} />
        </Routes>
      </Router>
  );
}

export default App;
