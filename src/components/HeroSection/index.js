import {React, useState} from 'react';
import {Button2} from '../ButtonComponents';
import { FaPlay, FaYinYang } from 'react-icons/fa';
import './Hero.css';

import Movies from './Movies';

const HeroSection = () => {

    const [hover, setHover] = useState(false);
      
    const onHover = () => {
        setHover(!hover);
    }
      
  return (
    <>
        <div id='home'>
            <div className="HeroContent">
                <Movies />
            </div>
                
        </div>
        
    </>
  )
}

export default HeroSection;