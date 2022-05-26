import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SnacksPage from '../components/Snacks';
import Footer from '../components/Footer';

const Snacks = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  } 

  return (
    <>
      <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
      <Navbar toggle = { toggleSidebar }/>
      <SnacksPage />
      <Footer />
    </>
  )
}

export default Snacks