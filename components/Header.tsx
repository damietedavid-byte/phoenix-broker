import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { IconSun } from './icons/IconSun';
import { IconMoon } from './icons/IconMoon';
import Button from './ui/Button';
import { IconLogo } from './icons/IconLogo';

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!themeContext || !authContext) return null;

  const { theme, toggleTheme } = themeContext;
  const { user, logout } = authContext;

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${
      isActive ? 'bg-primary/10 text-primary font-semibold' : ''
    }`;

  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${
      isActive ? 'bg-primary/10 text-primary font-semibold' : ''
    }`;


  return (
    <header className="bg-light-card dark:bg-dark-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <IconLogo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">NovaTrade</span>
            </Link>
            <nav className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
                <NavLink to="/trade" className={getNavLinkClass}>Trade</NavLink>
                <NavLink to="/tools" className={getNavLinkClass}>Tools</NavLink>
                {user && <NavLink to="/account" className={getNavLinkClass}>Account</NavLink>}
              </div>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
             <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                {theme === 'light' ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
             </button>
             {user ? (
                <>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Welcome, {user.username}</span>
                    <Button onClick={logout} variant="secondary" size="sm">Logout</Button>
                </>
             ) : (
                <div className="space-x-2">
                    <Link to="/auth"><Button variant="ghost" size="sm">Login</Button></Link>
                    <Link to="/auth"><Button variant="primary" size="sm">Sign Up</Button></Link>
                </div>
             )}
          </div>
          <div className="md:hidden flex items-center">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mr-2">
                {theme === 'light' ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
             </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
       {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)} end>Home</NavLink>
            <NavLink to="/trade" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Trade</NavLink>
            <NavLink to="/tools" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Tools</NavLink>
            {user && <NavLink to="/account" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Account</NavLink>}
          </div>
          <div className="pt-4 pb-3 border-t border-light-border dark:border-dark-border px-5">
             {user ? (
                <>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Welcome, {user.username}</p>
                    <Button onClick={() => { logout(); setIsMenuOpen(false); }} variant="secondary" size="sm" className="w-full">Logout</Button>
                </>
             ) : (
                <div className="space-y-2">
                    <Link to="/auth" className="block w-full"><Button variant="ghost" size="sm" className="w-full">Login</Button></Link>
                    <Link to="/auth" className="block w-full"><Button variant="primary" size="sm" className="w-full">Sign Up</Button></Link>
                </div>
             )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;