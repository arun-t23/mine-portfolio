import { useState } from 'react';
import { ProfileType } from '@/lib/types';
import Logo from './Logo';
import { VISITOR_PROFILE_IMAGE, RECRUITER_PROFILE_IMAGE } from '@/lib/constants';

interface NavbarProps {
  activeProfile: ProfileType;
  onSwitchProfile: () => void;
}

const Navbar = ({ activeProfile, onSwitchProfile }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // For mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-30 bg-gradient-to-b from-black to-transparent py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Logo size="medium" />
          
          <div className="hidden md:flex items-center space-x-5">
            <a href="#home" className="text-sm font-semibold text-gray-200 hover:text-white">Home</a>
            <a href="#projects" className="text-sm font-semibold text-gray-200 hover:text-white">Projects</a>
            <a href="#skills" className="text-sm font-semibold text-gray-200 hover:text-white">Skills</a>
            <a href="#about" className="text-sm font-semibold text-gray-200 hover:text-white">About</a>
            <a href="#contact" className="text-sm font-semibold text-gray-200 hover:text-white">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-200 hover:text-white">
            <i className="fas fa-search text-lg"></i>
          </button>
          <button className="text-gray-200 hover:text-white">
            <i className="fas fa-bell text-lg"></i>
          </button>
          
          {/* Profile dropdown */}
          <div className="relative group">
            <div 
              className="w-8 h-8 rounded overflow-hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <img 
                src={activeProfile === ProfileType.Visitor ? VISITOR_PROFILE_IMAGE : RECRUITER_PROFILE_IMAGE} 
                alt="Active Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-md py-2">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-black">Account</a>
                <button 
                  onClick={() => {
                    onSwitchProfile();
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-black"
                >
                  Switch Profiles
                </button>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-black">Help Center</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-black border-t border-gray-700">Sign out</a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-black py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#home" className="text-sm font-semibold text-netflix-light-gray hover:text-white py-2">Home</a>
            <a href="#projects" className="text-sm font-semibold text-netflix-light-gray hover:text-white py-2">Projects</a>
            <a href="#skills" className="text-sm font-semibold text-netflix-light-gray hover:text-white py-2">Skills</a>
            <a href="#about" className="text-sm font-semibold text-netflix-light-gray hover:text-white py-2">About</a>
            <a href="#contact" className="text-sm font-semibold text-netflix-light-gray hover:text-white py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
