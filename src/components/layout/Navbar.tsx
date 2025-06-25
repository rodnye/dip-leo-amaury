import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Clock, Image, Map, Users, FileText, Info } from 'lucide-react';

interface NavLink {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks: NavLink[] = [
    { name: 'Línea de Tiempo', path: '/timeline', icon: <Clock size={18} /> },
//    { name: 'Galería', path: '/gallery', icon: <Image size={18} /> },
//    { name: 'Mapa del Campus', path: '/map', icon: <Map size={18} /> },
//    { name: 'Testimonios', path: '/testimonials', icon: <Users size={18} /> },
//    { name: 'Recursos', path: '/resources', icon: <FileText size={18} /> },
    { name: 'Acerca de', path: '/about', icon: <Info size={18} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className={`font-serif font-bold text-2xl transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
              CUJAE<span >-Historia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar en la historia..." 
                className="search-input pl-10 pr-4 py-2 rounded-full bg-white/90 hover:bg-white transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
            </div>
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md flex items-center space-x-1 transition-colors duration-200
                    ${location.pathname === link.path 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : `${scrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:bg-white/20'}`
                    }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-neutral-800' : 'text-white'}`}
            aria-label="Alternar menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md pb-4 pt-2 slide-up">
            <div className="px-4 pb-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar en la historia..." 
                  className="search-input pl-10 w-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
              </div>
            </div>
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 flex items-center space-x-3
                    ${location.pathname === link.path 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;