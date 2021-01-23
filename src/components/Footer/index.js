import React from 'react';
import {FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems, 
    FooterLinkTitle, 
    FooterLink,
    FooterSign} from './FooterElements';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="signin">How It Works</FooterLink>
                                <FooterLink to="signin">Testimonials</FooterLink>
                                <FooterLink to="signin">Careers</FooterLink>
                                <FooterLink to="signin">Investors</FooterLink>
                                <FooterLink to="signin">Terms Of Service</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="signin">Contact</FooterLink>
                                <FooterLink to="signin">Support</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="signin">How It Works</FooterLink>
                                <FooterLink to="signin">Testimonials</FooterLink>
                                <FooterLink to="signin">Careers</FooterLink>
                                <FooterLink to="signin">Investors</FooterLink>
                                <FooterLink to="signin">Terms Of Service</FooterLink>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="signin">Facebook</FooterLink>
                                <FooterLink to="signin">Instagram</FooterLink>
                                <FooterLink to="signin">Youtube</FooterLink>
                                <FooterLink to="signin">Twitter</FooterLink>
                                <FooterLink to="signin">Whats App</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            <FooterSign href="/https://github.com/miltonr87" target="_blank" arial-label="GitHub">
             © Milton Rodrigues - {date}
            </FooterSign>
        </FooterContainer>
    )
};

export default Footer;
