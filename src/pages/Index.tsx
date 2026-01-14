
import { useEffect, useRef, useState } from 'react';
import { SplashScreen } from '@/components/SplashScreen';
import SplashCursor from '@/components/SplashCursor';
import TargetCursor from '@/components/TargetCursor';
import { Scene3D } from '@/components/3d/Scene3D';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [blur, setBlur] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setBlur(rect.bottom < 80); // Blur when hero section is mostly out of view
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <TargetCursor />
      <SplashCursor />
      {showSplash && <SplashScreen />}
      {/* 3D Background */}
      <Scene3D />
      {/* Blur overlay */}
      {blur && <div className="fixed inset-0 z-10 pointer-events-none bg-black/10 backdrop-blur-[6px] transition-all duration-500" />}

      {/* Content */}
      <div className={`relative z-20${showSplash ? ' pointer-events-none select-none opacity-0' : ''}`}>
        <Navbar />
        <main>
          <div ref={heroRef}>
            <HeroSection />
          </div>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
