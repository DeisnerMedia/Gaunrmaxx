import React from 'react';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarComponents';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/programm' onClick={toggle}>
                            Programm
                        </SidebarLink>

                        <SidebarLink to='/preise' onClick={toggle}>
                            Preise
                        </SidebarLink>

                        <SidebarLink to='/snacks' onClick={toggle}>
                            Snacks
                        </SidebarLink>

                        <SidebarLink to='/öffnungszeiten' onClick={toggle}>
                            Öffnungszeiten
                        </SidebarLink>

                    </SidebarMenu>
                    
                    <SideBtnWrap>
                        <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;