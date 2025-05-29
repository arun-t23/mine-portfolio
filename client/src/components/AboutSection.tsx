import { motion } from 'framer-motion';
import { 
  ABOUT_BG_IMAGE, 
  DEVELOPER_NAME,
  EXPERIENCE,
  EDUCATION 
} from '@/lib/constants';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={ABOUT_BG_IMAGE} 
          alt="Developer Workspace Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              About {DEVELOPER_NAME}
            </motion.h2>
            
            <div className="mb-6"></div>
            
            <motion.p 
              className="text-gray-300 text-lg mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I'm a passionate DevOps Engineer with expertise in CI/CD pipelines, containerization, and cloud infrastructure. I love automating workflows and optimizing system performance.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div>
                <h3 className="text-white font-bold mb-2">Experience</h3>
                <ul className="text-gray-300 space-y-2">
                  {EXPERIENCE.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-2">Education</h3>
                <ul className="text-gray-300 space-y-2">
                  {EDUCATION.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-white font-bold mb-2">More Details</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                  Download Resume
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                  Certificates
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm">
                  Publications
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
