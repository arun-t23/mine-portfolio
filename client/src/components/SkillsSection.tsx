import { useRef } from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { FRONTEND_SKILLS, BACKEND_SKILLS, TOOLS_SKILLS } from '@/lib/constants';

const SkillsSection = () => {
  const frontendRowRef = useRef<HTMLDivElement>(null);
  const backendRowRef = useRef<HTMLDivElement>(null);
  const toolsRowRef = useRef<HTMLDivElement>(null);

  // Helper function to handle horizontal scrolling for content rows
  const handleScroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const scrollAmount = direction === 'left' ? -180 : 180;
    ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="skills" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-bold text-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        {/* Frontend Skills Row */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl text-gray-200">Frontend Development</h3>
            
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll('left', frontendRowRef)}
                className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => handleScroll('right', frontendRowRef)}
                className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <div 
            ref={frontendRowRef}
            className="content-row custom-scrollbar flex gap-6 pb-4 overflow-x-auto"
          >
            {FRONTEND_SKILLS.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </div>
        
        {/* Backend Skills Row */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl text-gray-200">Backend Development</h3>
            
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll('left', backendRowRef)}
                className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => handleScroll('right', backendRowRef)}
                className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <div 
            ref={backendRowRef}
            className="content-row custom-scrollbar flex gap-6 pb-4 overflow-x-auto"
          >
            {BACKEND_SKILLS.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </div>
        
        {/* Tools & Technologies Row */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl text-gray-200">Tools & Technologies</h3>
            
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll('left', toolsRowRef)}
                className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => handleScroll('right', toolsRowRef)}
                className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <div 
            ref={toolsRowRef}
            className="content-row custom-scrollbar flex gap-6 pb-4 overflow-x-auto"
          >
            {TOOLS_SKILLS.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
