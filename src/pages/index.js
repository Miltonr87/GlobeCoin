import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import DataSection from '../components/DataSection';
import { dataInfo, dataInfo2, dataInfo3 } from '../components/DataSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

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
        <DataSection {...dataInfo}/>
        <DataSection {...dataInfo2}/>
        <Services />
        <DataSection {...dataInfo3}/>
        <Footer />
        </>
    )
};

export default Home;
