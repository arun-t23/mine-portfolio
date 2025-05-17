import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

const SkillCard = ({ skill, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-40 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-3 w-24 h-24 mx-auto bg-netflix-dark-gray rounded-full flex items-center justify-center">
        <i className={`${skill.iconType || 'fab'} ${skill.icon} text-5xl ${skill.iconColor}`}></i>
      </div>
      
      <h4 className="text-white font-semibold">{skill.name}</h4>
      
      <div className="mt-2 bg-gray-700 h-1 w-full rounded-full">
        <motion.div 
          className="bg-netflix-red h-1 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
