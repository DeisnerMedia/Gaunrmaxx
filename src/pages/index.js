import React, { useState } from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
  
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

export default Home;