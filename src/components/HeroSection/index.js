import {React, useState} from 'react';
import Image from '../../assets/images/Banner.jpg';
import {Button2} from '../ButtonComponents';
import {
    Diashow,
    HeroContainer,
    HeroContent,
    HeroPictures,
    HeroBtnWrapper,
    Play,
    YinYang,
    ArrowLeft,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);
      
    const onHover = () => {
        setHover(!hover);
    }
      
  return (
    <>
        <HeroContainer id='home'>
            <HeroPictures>
                <ArrowLeft />
                <Diashow src={Image} type='image' />
                <ArrowRight />
            </HeroPictures>

            <HeroContent>
                <HeroBtnWrapper>
                        <Button2 to='/trailer'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                        {hover ? <YinYang /> : <Play />} Trailer
                        </Button2>
                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection;