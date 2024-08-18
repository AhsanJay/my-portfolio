import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import SkillsSection from './Components/SkillsSection';
import ExperienceSection from './Components/ExperienceSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'

import './App.css'; // Add your own styles here

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}


export default App;
