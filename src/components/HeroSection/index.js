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
    ChatSquareDots,
    ChatSquare } from './HeroElements';

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
                <HeroH1>Reinventing global access to cryptocurrencies</HeroH1>
                <HeroP>Open your account and start taking care of your money when travelling around the world.</HeroP>
                <HeroBtnWrapper>
                    <Button to="/chatroom" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Online Chat {hover ? <ChatSquareDots /> : <ChatSquare />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>    
        </HeroContainer>
    )
}

export default HeroSection;
