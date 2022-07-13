import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: block;
    display: -webkit-box;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    max-width: 100%;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease; 
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
    color: white;
    text-decoration: none;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    margin-left: 24px;
    margin-top: 20px;
    height: 30px;

    &:hover {
        opacity: 0.9;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1241px) {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 80%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;

export const NavMenu = styled.ul`
    display: -webkit-box;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 1241px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkR)`
    color: white;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    align-items: center;
    text-decoration: none;
    padding: 0 4rem;
    font-size: 1.2rem;
    height: 100%;
    cursor: pointer;
    transition: 0.8s all ease;

    &:hover {
        border-bottom: 4px solid red;
    }

    &.active {
        border-bottom: 3px solid #00ccff;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 10px;

    @media screen and (max-width: 1241px) {
        display: none;
    }
`;



export const NavBtnLink = styled(LinkR)`
    border-radius: 7px;
    background: linear-gradient(
        108deg, 
        rgba(255, 0, 0) 0%,
        rgba(112, 2, 2) 100% 
    );;
    color: white;
    white-space: nowrap;
    padding: 10px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s all ease-in-out;
        background: #fff;
        color: #010606;
    }
`;