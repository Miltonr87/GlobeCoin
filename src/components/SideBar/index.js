import React from 'react';
import { SideBarContainer, 
    Icon, 
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRouter } from './SideBarElements';

const SideBar = () => {  
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about"> About </SideBarLink>
                    <SideBarLink to="discover"> Discover </SideBarLink>
                    <SideBarLink to="services"> Services </SideBarLink>
                    <SideBarLink to="signup"> Sign Up </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRouter to="signin">Sign In</SideBarRouter>
                </SideBtnWrap>
            </SideBarWrapper>    
        </SideBarContainer>
    )
};

export default SideBar;