import React, { useState } from 'react';
import Kinos from '../../components/Kinos';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const UnsereKinos = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
            <Navbar toggle = { toggleSidebar }/>
            <Kinos />
            <Footer />
        </>
    )
}

export default UnsereKinos