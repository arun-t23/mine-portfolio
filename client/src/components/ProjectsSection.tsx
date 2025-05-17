import { useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FEATURED_PROJECTS, WEB_PROJECTS } from '@/lib/constants';

const ProjectsSection = () => {
  const featuredRowRef = useRef<HTMLDivElement>(null);
  const webRowRef = useRef<HTMLDivElement>(null);

  // Helper function to handle horizontal scrolling for content rows
  const handleScroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const scrollAmount = direction === 'left' ? -320 : 320;
    ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="mt-0 md:mt-6 pb-16">
      <div className="container mx-auto px-4">
        {/* Featured Projects Row */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-netflix font-bold text-netflix-light-gray">Featured Projects</h2>
            
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll('left', featuredRowRef)}
                className="bg-netflix-dark-gray hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => handleScroll('right', featuredRowRef)}
                className="bg-netflix-dark-gray hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <motion.div 
            ref={featuredRowRef}
            className="content-row custom-scrollbar flex gap-4 pb-4 overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {FEATURED_PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
        
        {/* Web Applications Row */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-netflix font-bold text-netflix-light-gray">Web Applications</h2>
            
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll('left', webRowRef)}
                className="bg-netflix-dark-gray hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={() => handleScroll('right', webRowRef)}
                className="bg-netflix-dark-gray hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <motion.div 
            ref={webRowRef}
            className="content-row custom-scrollbar flex gap-4 pb-4 overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {WEB_PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
