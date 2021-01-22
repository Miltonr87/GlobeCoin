import React, { useState } from 'react';
import Video from '../../assets/video/mintbank.mp4';
import { Button } from '../Buttons/ButtonElement';
import { HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(hover ? false : true);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Money doesn't grow on a tree</HeroH1>
                <HeroP>Open your account and start taking care of your real money.</HeroP>
                <HeroBtnWrapper>
                    <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get Started! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>    
        </HeroContainer>
    )
}

export default HeroSection;
