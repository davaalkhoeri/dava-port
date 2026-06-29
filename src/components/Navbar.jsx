import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      const sections = ['home', 'about', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'portfolio', 'contact'];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] px-6 py-3.5 rounded-full border border-white/10 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-md flex items-center gap-6 shadow-lg transition-all duration-300">
      <div className="flex gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setActiveSection(item)}
            className={`nav-link relative font-medium transition-colors duration-300 text-sm py-1 bg-transparent ${
              activeSection === item 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 active-nav' 
                : 'text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      <div className="w-[1px] h-4 bg-slate-300 dark:bg-white/10" />

      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-1 rounded-lg cursor-pointer flex items-center justify-center"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </nav>
  );
};

export default Navbar;