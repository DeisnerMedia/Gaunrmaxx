import React from 'react';
import Logo from '../../assets/images/Logo.png';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>

                {/* Aufgeteilt in 2 grids */}
                {/* Grid 1 */}
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Über uns</FooterLinkTitle>
                            <FooterLink to='/karriere'>Karriere</FooterLink>
                            <FooterLink to='/unsere-kinos'>Unsere Kinos</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Kontakt</FooterLinkTitle>
                            <FooterLink to='/kontakt'>Kontakt</FooterLink>
                            <FooterLink to='/faq'>FAQ</FooterLink>
                            <FooterLink to='/presse'>Presse</FooterLink>
                            <FooterLink to='/newsletter'>Newsletter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                {/* Grid 2 */}
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Specials</FooterLinkTitle>
                            <FooterLink to='/schule'>Schule</FooterLink>
                            <FooterLink to='/familie'>Familie</FooterLink>
                            <FooterLink to='/news-artikel'>News & Artikel</FooterLink>
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle>Informationen</FooterLinkTitle>
                            <FooterLink to='/datenschutz'>Datenschutz</FooterLink>
                            <FooterLink to='/jugendschutz'>FSK & Jugendschutz</FooterLink>
                            <FooterLink to='/besuchsbedingungen'>Besuchsbedingungen</FooterLink>
                            <FooterLink to='/barrierefreiheit'>Barrierefreiheit</FooterLink>
                    </FooterLinkItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' src={Logo} alt='logo' onClick={toggleHome}>
                    </SocialLogo>
                    <WebsiteRights>Gaunrmaxx © {new Date().getFullYear()} All rights reserved.</WebsiteRights>

                </SocialMediaWrap>
            </SocialMedia>

        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer