import React, { useState } from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRouter,
  ChatSquareDots,
  ChatSquare,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(hover ? false : true);
  };

  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            {" "}
            About{" "}
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            {" "}
            Discover{" "}
          </SideBarLink>
          <SideBarLink to="services" onClick={toggle}>
            {" "}
            Services{" "}
          </SideBarLink>
          <SideBarLink to="support" onClick={toggle}>
            {" "}
            Support{" "}
          </SideBarLink>
          <SideBarLink to="clients" onClick={toggle}>
            {" "}
            Clients{" "}
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRouter
            to="/chatroom"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            {hover ? <ChatSquareDots /> : <ChatSquare />} Chat{" "}
          </SideBarRouter>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
