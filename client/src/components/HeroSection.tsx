import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DEVELOPER_TITLE, 
  DEVELOPER_SUBTITLE, 
  DEVELOPER_BIO,
  HERO_IMAGE 
} from '@/lib/constants';
import netflixIntroVideo from '@/assets/netflix-intro.mp4';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start playing the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen pt-16">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={HERO_IMAGE} 
          alt="Developer Workspace Hero Image" 
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center h-full pb-20">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-netflix font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {DEVELOPER_TITLE}
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {DEVELOPER_SUBTITLE}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 mb-8 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {DEVELOPER_BIO}
          </motion.p>
          
          {/* Netflix intro video below the fullstack developer section */}
          <motion.div
            className="mb-8 relative w-full max-w-xl rounded-md overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <video 
              ref={videoRef}
              className="w-full"
              muted
              loop
              playsInline
              src={netflixIntroVideo}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md flex items-center font-semibold"
            >
              <i className="fas fa-play mr-2"></i> View Projects
            </a>
            
            <a 
              href="#about" 
              className="bg-gray-600 bg-opacity-70 hover:bg-opacity-100 text-white px-6 py-3 rounded-md flex items-center font-semibold"
            >
              <i className="fas fa-info-circle mr-2"></i> More Info
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
