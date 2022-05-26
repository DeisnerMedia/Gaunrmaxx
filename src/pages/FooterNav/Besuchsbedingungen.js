import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import BesuchsbedingungenNav from '../../components/Besuchsbedingungen';
import Footer from '../../components/Footer';

const Besuchsbedingungen = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  } 

  return (
    <>
      <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
      <Navbar toggle = { toggleSidebar }/>
      <BesuchsbedingungenNav />
      <Footer />
    </>
  )
}

export default Besuchsbedingungen