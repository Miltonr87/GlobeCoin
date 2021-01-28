import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BsFillChatSquareFill, BsFillChatSquareDotsFill } from "react-icons/bs";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  /* Ternary Operator who decides if the NavBar is opened (100%) or closed (0%) */
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  /* Ternary Operator who decides if the Burger inside NavBar is opened (0%) or closed (100%) */
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  /* top: 0; */
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  slist-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #f9b81f;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarRouter = styled(LinkRouter)`
  border-radius: 50px;
  background: #f9b81f;
  white-space: nowrap;
  padding: 16px 16px;
  color: #010606;
  font-size: 16px;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`;

export const ChatSquareDots = styled(BsFillChatSquareDotsFill)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ChatSquare = styled(BsFillChatSquareFill)`
  margin-left: 8px;
  font-size: 20px;
`;
