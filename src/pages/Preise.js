import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Preise = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
      <Navbar toggle = { toggleSidebar }/>
      <Footer />
    </>
  )
}

export default Preise