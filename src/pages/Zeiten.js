import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Oeffnungszeiten from '../components/Oeffnungszeiten';
import Footer from '../components/Footer';

const Zeiten = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  } 
  
  return (
    <>
      <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
      <Navbar toggle = { toggleSidebar }/>
        <Oeffnungszeiten/>
      <Footer />
    </>
  )
}

export default Zeiten