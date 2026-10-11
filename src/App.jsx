import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarsStrip from './components/PillarsStrip';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

import './styles/global.css';
import './styles/components.css';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <div className="portfolio-app">
      {/* Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={handleOpenResume} />
        <PillarsStrip />
        <About />
        <div className="editorial-divider" aria-hidden="true" />
        <Expertise />
        <div className="editorial-divider" aria-hidden="true" />
        <Experience />
        <div className="editorial-divider" aria-hidden="true" />
        <Education />
        <div className="editorial-divider" aria-hidden="true" />
        <Skills />
        <Interests />
        <div className="editorial-divider" aria-hidden="true" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Official Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}
