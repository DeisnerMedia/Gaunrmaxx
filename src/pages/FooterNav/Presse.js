import React, { useState } from 'react';
import PressePage from '../../components/Presse';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const Presse = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
    <>
        <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
        <Navbar toggle = { toggleSidebar }/>
        <PressePage />
        <Footer />
    </>
  )
}

export default Presse