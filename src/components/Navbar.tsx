import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrolled);

      setIsScrolled(scrollTop > 10);

      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveLink(link.href.substring(1));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-[60] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex justify-between items-center">
            <a
              href="#home"
              className={`text-2xl font-extrabold tracking-wide transition-transform duration-300 ${isScrolled ? 'scale-95' : 'scale-100'} text-blue-600 dark:text-blue-400`}
            >
              Tamil<span className="text-gray-800 dark:text-white">Selvan</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`relative text-sm font-medium group transition-colors duration-300 ${
                        activeLink === link.href.substring(1)
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                          activeLink === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Resume Button */}
              <a
  href="/src/Asset/Profile.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
>
  <Download size={16} /> <span>Resume</span>
</a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Nav Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
  href="/src/Asset/Profile.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
>
  <Download size={16} /> <span>Resume</span>
</a>

                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
