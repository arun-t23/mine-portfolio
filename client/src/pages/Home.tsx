import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import NetflixIntro from '@/components/NetflixIntro';
import ProfileSelection from '@/components/ProfileSelection';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { IntroState, ProfileType } from '@/lib/types';

const Home = () => {
  const [introState, setIntroState] = useState<IntroState>({
    introCompleted: false,
    profileSelected: null
  });

  const handleIntroComplete = () => {
    setIntroState((prev) => ({
      ...prev,
      introCompleted: true
    }));
  };

  const handleProfileSelect = (profile: ProfileType) => {
    setIntroState((prev) => ({
      ...prev,
      profileSelected: profile
    }));
  };

  const handleSwitchProfile = () => {
    setIntroState((prev) => ({
      ...prev,
      profileSelected: null
    }));
  };

  return (
    <>
      <AnimatePresence>
        {!introState.introCompleted && (
          <NetflixIntro onIntroComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {introState.introCompleted && !introState.profileSelected && (
          <ProfileSelection onProfileSelect={handleProfileSelect} />
        )}
      </AnimatePresence>

      {introState.profileSelected && (
        <div className="min-h-screen bg-black">
          <Navbar 
            activeProfile={introState.profileSelected} 
            onSwitchProfile={handleSwitchProfile} 
          />
          
          <main>
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
