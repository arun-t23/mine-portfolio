import { motion } from 'framer-motion';
import { DEVELOPER_NAME } from '@/lib/constants';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  animate?: boolean;
}

export function Logo({ size = 'medium', className = '', animate = false }: LogoProps) {
  const sizeClasses = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-7xl md:text-9xl',
  };

  if (animate) {
    return (
      <motion.h1 
        className={`netflix-logo ${sizeClasses[size]} ${className}`}
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: [0.1, 1.2, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 4, times: [0, 0.5, 1], ease: "easeOut" }}
      >
        {DEVELOPER_NAME}
      </motion.h1>
    );
  }

  return <h1 className={`netflix-logo ${sizeClasses[size]} ${className}`}>{DEVELOPER_NAME}</h1>;
}

export default Logo;
