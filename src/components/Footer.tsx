import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold mb-4 text-center md:text-left">
              Tamil<span className="text-blue-400">Selvan</span>
            </h3>
            <p className="text-gray-400 text-center md:text-left mb-6 max-w-sm">
              Software Developer specializing in creating beautiful, functional, and user-friendly web applications.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:tamilselvan.c155@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resume Download */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Download Resume</h3>
            <p className="text-gray-400 mb-4 text-center md:text-left max-w-sm">
              Get a copy of my resume to learn more about my skills and experience.
            </p>
            <a
              href="/src/Asset/Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              <Download size={18} /> <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Tamil Selvan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
