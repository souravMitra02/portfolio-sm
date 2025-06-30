import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="pt-16">
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;