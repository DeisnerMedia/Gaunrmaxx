import React, { useState } from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  } 

  return (
    <>
      <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
      <Navbar toggle = { toggleSidebar }/>
      <HeroSection />
      <Footer />
    </>
  )
}

export default Home;