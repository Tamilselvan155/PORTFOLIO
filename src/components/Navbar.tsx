// import React, { useState, useEffect } from 'react';
// import { Moon, Sun, Menu, X, Download } from 'lucide-react';
// import Dlogo from '../Asset/newlogo.png';
// import Llogo from '../Asset/black_logo.png';


// interface NavbarProps {
//   theme: string;
//   toggleTheme: () => void;
//   mobileMenuOpen: boolean;
//   setMobileMenuOpen: (open: boolean) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState('home');
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Experience', href: '#experience' },
//     // { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = (scrollTop / scrollHeight) * 100;
//       setScrollProgress(scrolled);

//       setIsScrolled(scrollTop > 10);

//       navLinks.forEach(link => {
//         const section = document.querySelector(link.href);
//         if (section) {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 80 && rect.bottom >= 80) {
//             setActiveLink(link.href.substring(1));
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll); 
//   }, []);

//   return (
//     <>
//       {/* Scroll Progress Bar */}
//       <div
//         className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-[60] transition-all duration-200"
//         style={{ width: `${scrollProgress}%` }}
//       />

//       <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
//         <div className="container mx-auto px-4 md:px-6">
//           <nav className="flex justify-between items-center">
//             {/* Logo */}
//             {/* <a
//               href="#home"
//               className={`text-2xl font-extrabold tracking-wide transition-transform duration-300 ${isScrolled ? 'scale-95' : 'scale-100'} text-blue-600 dark:text-blue-400`}
//             >
//                <img className='h-20 w-20 ' src="/src/Asset/logo1.png" alt="logo" />
//               Tamil<span className="text-gray-800 dark:text-white">Selvan</span>
//             </a> */}
//            <a
//   href="#home"
//   className={`flex items-center gap-1 text-2xl font-extrabold tracking-wide transition-transform duration-300 ${isScrolled ? 'scale-95' : 'scale-100'} text-blue-600 dark:text-blue-400`}
// >
//   {theme === 'dark' ? (
//     <img
//       className="h-14 w-14 object-contain rounded-lg"
//       src={Dlogo}
//       alt="logo"
//     />
//   ) : (
//     <img
//       className="h-14 w-14 object-contain rounded-lg"
//       src={Llogo}
//       alt="logo"
//     />
//   )}

//   <span className="hidden md:inline">
//     Tamil<span className="text-gray-800 dark:text-white">Selvan</span>
//   </span>
// </a>



//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <ul className="flex space-x-6">
//                 {navLinks.map(link => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       className={`relative text-sm font-medium group transition-colors duration-300 ${
//                         activeLink === link.href.substring(1)
//                           ? 'text-blue-600 dark:text-blue-400'
//                           : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
//                       }`}
//                     >
//                       {link.name}
//                       <span
//                         className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
//                           activeLink === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
//                         }`}
//                       />
//                     </a>
//                   </li>
//                 ))}
//               </ul>

//               {/* Resume Button */}
//               <a
//   href="https://drive.google.com/file/d/1np3opsgGcy5f2KHZzUOK3iIuxn1McyyM/view?usp=sharing"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
// >
//   <Download size={16} /> <span>Resume</span>
// </a>

//               {/* Theme Toggle */}
//               <button
//                 onClick={toggleTheme}
//                 title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
//                 className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
//               >
//                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </div>

//             {/* Mobile Menu */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
//                 title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
//               >
//                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//               </button>

//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
//               >
//                 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </nav>
//         </div>

//         {/* Mobile Nav Panel */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
//             <div className="container mx-auto px-4 py-4">
//               <ul className="space-y-4">
//                 {navLinks.map(link => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//                 <li>
//                   <a
//   href="/src/Asset/Profile.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
// >
//   <Download size={16} /> <span>Resume</span>
// </a>

//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import Dlogo from '../Asset/newlogo.png';
import Llogo from '../Asset/black_logo.png';

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
        className="fixed top-0 left-0 h-1 z-[60] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 text-2xl font-bold tracking-tight">
              <img
                src={theme === 'dark' ? Dlogo : Llogo}
                alt="logo"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <span className="hidden md:inline text-blue-600 dark:text-blue-400">
                Tamil<span className="text-gray-800 dark:text-white">Selvan</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`relative group text-sm font-medium transition-colors duration-300 ${
                        activeLink === link.href.substring(1)
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 bg-blue-600 dark:bg-blue-400 ${
                          activeLink === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1np3opsgGcy5f2KHZzUOK3iIuxn1McyyM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Controls */}
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

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://drive.google.com/file/d/1np3opsgGcy5f2KHZzUOK3iIuxn1McyyM/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                  >
                    <Download size={16} />
                    <span>Resume</span>
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
