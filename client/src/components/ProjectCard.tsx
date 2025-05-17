import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="content-card flex-shrink-0 w-[300px] relative overflow-hidden rounded-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-[170px] object-cover" 
      />
      
      <motion.div 
        className="card-overlay absolute inset-0 flex flex-col justify-end p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white text-lg font-bold">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.description}</p>
        
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
