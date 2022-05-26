import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Jugendschutz from '../../components/FSK&Jugendsschutz';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjfour,homeObjfive, homeObjsix, homeObjseven, homeObjeight } from '../../components/FSK&Jugendsschutz/Data';
import Footer from '../../components/Footer';

const JugendschutzSite = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  } 

  return (
    <>
      <Sidebar isOpen = { isOpen } toggle = { toggleSidebar }/>
      <Navbar toggle = { toggleSidebar }/>
      <Jugendschutz {...homeObjOne} />
      <Jugendschutz {...homeObjTwo} />
      <Jugendschutz {...homeObjThree} />
      <Jugendschutz {...homeObjfour} />
      <Jugendschutz {...homeObjfive} />
      <Jugendschutz {...homeObjsix} />
      <Jugendschutz {...homeObjseven} />
      <Jugendschutz {...homeObjeight} />
      <Footer />
    </>
  )
}

export default JugendschutzSite