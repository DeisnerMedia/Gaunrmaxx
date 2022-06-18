import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Registrieren from '../components/LoginRegisterSystem/Signup';
import Footer from '../components/Footer';

const SignUp = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar isOpen = { isOpen } toggle = { toggleSidebar }/>
            <Sidebar toggle = { toggleSidebar }/>
            <Registrieren />
            <Footer />
        </>
    );
};

export default SignUp;
