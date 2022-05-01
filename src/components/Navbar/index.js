import { React, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import Logo from '../../assets/images/Logo.png';

import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <img alt="Gaunrmaxx" src={Logo}/>
                        </NavLogo>


                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>

                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                to='/programm'
                                smooth='true'
                                duration={500}
                                spy='true'
                                exact='true'
                                offset={-80}
                                >
                                Programm</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks 
                                to='/preise'
                                smooth='true'
                                duration={500}
                                spy='true'
                                exact='true'
                                offset={-80}
                                >
                                Preise</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks 
                                to='/snacks'
                                smooth='true'
                                duration={500}
                                spy='true'
                                exact='true'
                                offset={-80}
                                >
                                Snacks</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks 
                                to='/zeiten'
                                smooth='true'
                                duration={500}
                                spy='true'
                                exact='true'
                                offset={-80}
                                >
                                Öffnungszeiten</NavLinks>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;