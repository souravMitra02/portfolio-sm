import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div className="pt-16">
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;