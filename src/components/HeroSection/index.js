import React, { useState } from "react";
import Video from "../../assets/video/globecoin.mp4";
import { Button } from "../Buttons/ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  CurrencyWhite,
  CurrencyBlack,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(hover ? false : true);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Reinventing global access to cryptocurrencies</HeroH1>
        <HeroP>
          Open your account and start taking care of your money. Search in real
          time for the best effective Bitcoin prices!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="calculator"
            smooth={true}
            duration={1900}
            offset={-90}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            {hover ? <CurrencyWhite /> : <CurrencyBlack />} Calculator
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
