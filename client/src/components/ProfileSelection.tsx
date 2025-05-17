import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProfileType } from '@/lib/types';
import { VISITOR_PROFILE_IMAGE, RECRUITER_PROFILE_IMAGE } from '@/lib/constants';

interface ProfileSelectionProps {
  onProfileSelect: (profile: ProfileType) => void;
}

const ProfileSelection = ({ onProfileSelect }: ProfileSelectionProps) => {
  const [hoveredProfile, setHoveredProfile] = useState<ProfileType | null>(null);

  const handleProfileSelect = (profile: ProfileType) => {
    onProfileSelect(profile);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex flex-col items-center justify-center z-40 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-2xl md:text-4xl mb-10 text-netflix-light-gray"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Who's viewing?
        </motion.h1>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Visitor Profile */}
          <div 
            className={`profile-card cursor-pointer flex flex-col items-center ${hoveredProfile === ProfileType.Visitor ? 'scale-110' : ''}`}
            onClick={() => handleProfileSelect(ProfileType.Visitor)}
            onMouseEnter={() => setHoveredProfile(ProfileType.Visitor)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden border-2 ${hoveredProfile === ProfileType.Visitor ? 'border-white' : 'border-transparent'}`}>
              <img 
                src={VISITOR_PROFILE_IMAGE} 
                alt="Visitor Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="mt-4 text-netflix-light-gray">Visitor</p>
          </div>
          
          {/* Recruiter Profile */}
          <div 
            className={`profile-card cursor-pointer flex flex-col items-center ${hoveredProfile === ProfileType.Recruiter ? 'scale-110' : ''}`}
            onClick={() => handleProfileSelect(ProfileType.Recruiter)}
            onMouseEnter={() => setHoveredProfile(ProfileType.Recruiter)}
            onMouseLeave={() => setHoveredProfile(null)}
          >
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden border-2 ${hoveredProfile === ProfileType.Recruiter ? 'border-white' : 'border-transparent'}`}>
              <img 
                src={RECRUITER_PROFILE_IMAGE} 
                alt="Recruiter Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="mt-4 text-netflix-light-gray">Recruiter</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileSelection;
