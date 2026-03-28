import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { HomeIntro } from './components/sections/HomeIntro';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeIntro />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
