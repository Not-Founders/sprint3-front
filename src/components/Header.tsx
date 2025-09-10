import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/consultas', label: 'Consultas' },
    { to: '/exames', label: 'Exames' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contato', label: 'Contato' },
    {to: '/integrantes', label: 'Integrantes'}
  ];

  const linkClass = "text-slate-600 font-medium py-2 relative transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100";
  const activeLinkClass = "text-blue-600 after:scale-x-100";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/"><img src="/hc.png" alt="HC" className="h-25" /></NavLink>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/login" className="hidden md:inline-block bg-blue-600 text-white font-bold px-6 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Login
        </NavLink>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> ) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-slate-700'}`}>
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white font-bold px-8 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors w-11/12 text-center">
                Login
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;