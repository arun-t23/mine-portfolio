import { motion } from 'framer-motion';
import { 
  ABOUT_BG_IMAGE, 
  PROFILE_IMAGE, 
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
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-1/3">
            <motion.div 
              className="aspect-[2/3] overflow-hidden rounded-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={PROFILE_IMAGE} 
                alt={`${DEVELOPER_NAME} Professional Portrait`} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/3">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-red-600 text-sm font-bold">NETFLIX ORIGINAL</span>
              <span className="h-5 w-px bg-gray-500"></span>
              <span className="text-gray-300 text-sm font-bold">BIOGRAPHY</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              About {DEVELOPER_NAME}
            </motion.h2>
            
            <motion.div 
              className="mb-6 flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-green-500 font-bold">98% Match</span>
              <span className="border border-gray-600 px-1 text-sm">2023</span>
              <span className="border border-gray-600 px-1 text-sm">HD</span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-lg mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              A passionate full stack developer with over 6 years of experience building modern web applications. Specializing in creating seamless user experiences with React on the frontend and robust APIs with Node.js on the backend.
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
