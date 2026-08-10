import React from 'react';
import HeroUI from './components/HeroUI';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden selection:bg-cyber-purple selection:text-white scroll-smooth">
      <Navbar />

          {/* Fixed background image removed – using circular image in HeroUI instead */}

      {/* Dark overlay — lightened so purple/blue details breathe through */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black/40" />

      {/* Accent glows matching the image palette */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[5%] w-[45vw] h-[45vw] max-w-[500px] rounded-full bg-purple-700/8 blur-[160px]" />
        <div className="absolute bottom-[-5%] right-[5%] w-[45vw] h-[45vw] max-w-[500px] rounded-full bg-blue-600/8 blur-[160px]" />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Hero */}
        <section id="hero" className="w-full min-h-screen relative flex items-center pt-20">
          <HeroUI />
        </section>

        {/* About */}
        <section id="about" className="w-full relative py-16 md:py-24 pointer-events-auto">
          <AboutSection />
        </section>

        {/* Skills */}
        <section id="skills" className="w-full relative py-16 md:py-24 pointer-events-auto">
          <SkillsSection />
        </section>

        {/* Experience */}
        <section id="experience" className="w-full relative py-16 md:py-24 pointer-events-auto">
          <ExperienceSection />
        </section>

        {/* Projects */}
        <section id="work" className="w-full relative py-16 md:py-24 pointer-events-auto">
          <ProjectsSection />
        </section>

        {/* Contact */}
        <section id="contact" className="w-full relative pointer-events-auto">
          <ContactSection />
        </section>

        <div className="h-16" />
      </div>
    </div>
  );
}

export default App;
