import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa'; // Added skill icons

const Hero: React.FC = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Dynamic greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <section
      id="home"
      className="pt-20 pb-20 md:pt-32 md:pb-32 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950"
    >
      <div className="absolute inset-0 -z-10">
        {/* Subtle Background Animation */}
        <div className="absolute top-10 left-[-50px] w-96 h-96 bg-blue-500/20 dark:bg-blue-700/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[28rem] h-[28rem] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[140px] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-4 animate-fade-in">
            {greeting}, I'm
          </h2>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">
              Tamil Selvan
            </span>
          </h1>

          {/* Typing Animation for Roles */}
          <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-12 animate-slide-up delay-200">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Web Developer',
                2000,
                'React Specialist',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 animate-fade-in-delay delay-300">
            I specialize in creating seamless, visually appealing, and highly functional web applications, with a focus on React, front-end technologies, and user-centered design.
          </p>

          {/* Skills Section */}
          {/* <div className="w-full text-center mb-12">
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Skills</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                <FaReact size={48} className="text-blue-600 dark:text-blue-400 mb-2" />
                <p className="text-lg">React</p>
              </div>
              <div className="flex flex-col items-center">
                <FaHtml5 size={48} className="text-orange-500 dark:text-orange-400 mb-2" />
                <p className="text-lg">HTML5</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt size={48} className="text-blue-500 dark:text-blue-400 mb-2" />
                <p className="text-lg">CSS3</p>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs size={48} className="text-green-600 dark:text-green-400 mb-2" />
                <p className="text-lg">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGitAlt size={48} className="text-gray-800 dark:text-gray-400 mb-2" />
                <p className="text-lg">Git</p>
              </div>
            </div>
          </div> */}

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay delay-500">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-500"
            >
              Contact Me
            </a>
          </div>

          {/* Social Media Icons with Hover Effects */}
          <div className="flex space-x-6 mt-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:text-indigo-600"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:text-indigo-600"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:text-indigo-600"
            >
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
