import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import NewsletterPage from "../../components/Newsletter";
import Footer from "../../components/Footer";

const Newsletter = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
            <Navbar toggle = { toggleSidebar }/>
            <NewsletterPage />
            <Footer />
        </>
    );
};

export default Newsletter;
