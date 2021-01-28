import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
/* React Scroll */
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ChatSquareDots,
  ChatSquare,
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(hover ? false : true);
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <h1>GL🌐BECOIN</h1>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={+70}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                offset={+70}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={+70}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="support"
                smooth={true}
                duration={500}
                spy={true}
                offset={+70}
              >
                Support
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="clients"
                smooth={true}
                duration={500}
                spy={true}
                offset={+70}
              >
                Clients
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink
              to="/chatroom"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {hover ? <ChatSquareDots /> : <ChatSquare />} Chat{" "}
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
