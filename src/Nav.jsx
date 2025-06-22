import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import l from '../src/log.jpg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Close mobile menu on window resize to medium and up
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-black flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={l} alt="Logo" className="h-12 w-12 rounded-full" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-xl">
        {['Home','About','Menu','Gallery','Customers','Contact'].map((text, i) => (
          <li key={i}>
            <Link to={text === 'Home' || text === 'Contact' ? '/' : `/${text}`} className="text-white hover:text-gray-300">
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-white" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-black transform ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="mt-16 space-y-6 px-6 text-2xl">
          {['Home','About','Menu','Gallery','Customers','Contact'].map((text, i) => (
            <li key={i} onClick={() => setNavOpen(false)}>
              <Link to={text === 'Home' || text === 'Contact' ? '/' : `/${text}`} className="text-white">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
