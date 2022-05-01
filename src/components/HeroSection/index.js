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
                <div className='BtnWrapper'>
                        <Button2 to='/trailer'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            smooth='true'
                            duration={500}
                            spy='true'
                            exact='true'
                            offset={-80}
                        >
                        {hover ? <FaYinYang id='yinYang' /> : <FaPlay id='faPlay' />} Trailer
                        </Button2>
                </div>

                <Movies />
            </div>
                
        </div>
        
    </>
  )
}

export default HeroSection;