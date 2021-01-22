import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { dataInfo } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(isOpen ? false : true)
    };

    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <InfoSection {...dataInfo}/>
        </>
    )
};

export default Home;
