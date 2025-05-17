import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo size="medium" className="mb-6 md:mb-0" />
          
          <div className="text-gray-300 text-sm">
            <ul className="flex flex-wrap justify-center gap-6">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
            
            <p className="mt-6 text-center">© {new Date().getFullYear()} John Doe. All rights reserved. Inspired by Netflix.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
