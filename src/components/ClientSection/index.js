import React from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroBtnWrapper
  } from "./Style.js";
import Video from "../../assets/video/client.mp4";
import CoinConverter from "../CoinConverter";

const ClientSection = () => {
    return(
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Calculator</HeroH1>
        <HeroBtnWrapper>
          <CoinConverter />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
    )
};

export default ClientSection;