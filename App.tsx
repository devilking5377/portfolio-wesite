
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeDownload from './components/ResumeDownload';

const App: React.FC = () => {
  return (
    <div className="bg-gray-950 min-h-screen relative overflow-x-hidden antialiased">
      <div className="aurora-background">
        <div className="aurora-shape1"></div>
        <div className="aurora-shape2"></div>
        <div className="aurora-shape3"></div>
      </div>
      
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <HeroSection />
        <AboutSection />
        <ResumeDownload />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
