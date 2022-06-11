import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import KarrierePage from "../../components/Karriere";
import Footer from "../../components/Footer";
import {homeObjOne, homeObjTwo, homeObjThree} from "../../components/Karriere/Data";

const Karriere = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
            <Navbar toggle = { toggleSidebar }/>
            <KarrierePage {...homeObjOne}/>
            <KarrierePage {...homeObjTwo}/>
            <KarrierePage {...homeObjThree}/>
            <Footer />
        </>
    );
};

export default Karriere;
