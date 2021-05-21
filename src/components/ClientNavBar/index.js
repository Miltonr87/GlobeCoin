import React, { useState } from 'react';
import {
    Nav,
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavBtnLink,
    ChatSquareDots,
    ChatSquare,
  } from "./NavBarElements";
  import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Header = ({ toggle }) => {
    const [current, setCurrent] = useState('home');
    let dispatch = useDispatch();
    let { user }= useSelector((state) => ({ ...state}));
    let history = useHistory();
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(hover ? false : true);
    };

    const handleClick = (e) => {
        setCurrent(e.key)
        console.log(e.key)
    }

    const logout = () => {
      firebase.auth().signOut()
      dispatch({
        type: "LOGOUT",
        payload: null
      })
      history.push('/login')
    }


    return (
      <>
      <Nav>
        <NavBarContainer>
          <NavLogo key="home" onClick={handleClick} selectedKeys={[current]}>
          <Link to="/"> <h1>GL🌐BECOIN</h1> </Link>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          
          {user && (<NavMenu>
              <NavLinks
                key="logged"
              >
                { user.email && user.email.split('@')[0] }
              </NavLinks>
              
              <NavBtnLink
                key="setting:2"
                onClick={logout}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                {hover ? <ChatSquareDots /> : <ChatSquare />} Logout{" "}
              </NavBtnLink>
            
            </NavMenu>)}
          
        </NavBarContainer>
      </Nav>
    </>
    )
}

export default Header;