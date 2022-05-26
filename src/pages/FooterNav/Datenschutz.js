import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import DatenschutzRef from '../../components/Datenschutz';
import { homeObjOne, homeObjTwo, homeObjThree } from '../../components/Datenschutz/Data';
import Footer from '../../components/Footer';

const Datenschutz = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  } 

  return (
    <>
      <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
      <Navbar toggle = { toggleSidebar }/>
      <DatenschutzRef {...homeObjOne} />
      <DatenschutzRef {...homeObjTwo} />
      <DatenschutzRef {...homeObjThree} />
      <Footer />
    </>
  )
}

export default Datenschutz