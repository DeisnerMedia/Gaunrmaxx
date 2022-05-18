import React from 'react';
import { NavLinks } from '../Navbar/NavbarElements';

import { 
    InfoContainer, 
    InfoWrapper, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
   
} from './InfoComponents';


const Datenschutz = ({ 
    lightBg, 
    id, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    alt, 
    primary, 
    dark, 
    dark2 
}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        
                    </Column2>
            
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default Datenschutz