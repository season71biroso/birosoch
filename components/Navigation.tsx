import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENUS, CHURCH_INFO } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine styles based on route and scroll state
  const isTransparent = isHome && !scrolled && !isOpen;
  const navBackgroundClass = isTransparent 
    ? 'bg-transparent py-5' 
    : 'bg-white/95 backdrop-blur-md shadow-sm py-3';
  
  const textColorClass = isTransparent ? 'text-white' : 'text-slate-900';
  const subTextColorClass = isTransparent ? 'text-slate-200' : 'text-slate-500';
  const menuTextColorClass = (path: string) => {
    if (location.pathname === path) return 'text-amber-500';
    return isTransparent ? 'text-white hover:text-amber-400' : 'text-slate-700 hover:text-amber-500';
  };
  const mobileMenuIconColor = isTransparent ? 'text-white' : 'text-slate-900';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-lg transition-colors ${isTransparent ? 'bg-white/20 text-white' : 'bg-slate-900 text-white group-hover:bg-amber-500'}`}>
            <Church size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none transition-colors ${textColorClass}`}>
              {CHURCH_INFO.name}
            </span>
            <span className={`text-[10px] tracking-wider transition-colors ${subTextColorClass}`}>
              BIROSO CHURCH
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {MENUS.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className={`text-sm font-medium transition-colors ${menuTextColorClass(menu.path)}`}
            >
              {menu.name}
            </Link>
          ))}
          <a
            href={CHURCH_INFO.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-full transition-colors"
          >
            유튜브 채널
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="text-slate-900" />
          ) : (
            <Menu className={mobileMenuIconColor} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {MENUS.map((menu) => (
                <Link
                  key={menu.path}
                  to={menu.path}
                  className={`text-lg font-medium ${
                    location.pathname === menu.path ? 'text-amber-500' : 'text-slate-800'
                  }`}
                >
                  {menu.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <a
                href={CHURCH_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-red-600 font-medium"
              >
                유튜브 바로가기
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;