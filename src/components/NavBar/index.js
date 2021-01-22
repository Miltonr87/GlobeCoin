import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink } from './NavBarElements';


const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                <NavLogo Link to='/'>
                    <h1>GlobeCoin</h1>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
};

export default NavBar;