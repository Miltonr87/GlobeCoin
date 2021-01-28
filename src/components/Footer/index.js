import React from "react";
import { FooterContainer, FooterSign } from "./FooterElements";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterSign
        href="/https://github.com/miltonr87"
        target="_blank"
        arial-label="GitHub"
      >
        © Milton Rodrigues - {date}
      </FooterSign>
    </FooterContainer>
  );
};

export default Footer;
