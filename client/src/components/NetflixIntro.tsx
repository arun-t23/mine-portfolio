import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { netflixSound, playSound } from '@/lib/sounds';
import Logo from './Logo';

interface NetflixIntroProps {
  onIntroComplete: () => void;
}

const NetflixIntro = ({ onIntroComplete }: NetflixIntroProps) => {
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    // Setup a user interaction to allow sound playback
    const handleUserInteraction = () => {
      if (!soundPlayed) {
        setSoundPlayed(true);
        playSound(netflixSound).catch(err => {
          console.error('Failed to play Netflix sound:', err);
        });
      }
      
      // Clean up event listener
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    // Intro completes after 5 seconds
    const timer = setTimeout(() => {
      onIntroComplete();
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [onIntroComplete, soundPlayed]);

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
    >
      <div className="text-center">
        <Logo size="large" animate={true} />
        
        <motion.p 
          className="text-gray-200 mt-4" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default NetflixIntro;
