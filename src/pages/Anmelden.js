import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AnmeldenPage from '../components/LoginRegisterSystem';
import Footer from '../components/Footer';

const Anmelden = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar isOpen = { isOpen } toggle = { toggleSidebar }/>
            <Sidebar toggle = { toggleSidebar }/>
            <AnmeldenPage />
            <Footer />
        </>
    )
}

export default Anmelden;
