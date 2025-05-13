import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaDatabase,
  FaJs,
} from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-600 dark:text-blue-400" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500 dark:text-orange-400" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500 dark:text-blue-400" /> },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-500 dark:text-yellow-300" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600 dark:text-green-400" /> },
  { name: 'Python', icon: <FaPython size={40} className="text-blue-400 dark:text-blue-300" /> },
  { name: 'Java', icon: <FaJava size={40} className="text-red-600 dark:text-red-400" /> },
  { name: 'SQL', icon: <FaDatabase size={40} className="text-gray-700 dark:text-gray-300" /> },
  { name: 'Git', icon: <FaGitAlt size={40} className="text-gray-800 dark:text-gray-400" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 animate-fadeIn">
            My Skillset
          </h2>
          <div className="w-20 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto text-md">
            Technologies and tools I frequently use to build scalable, performant, and user-friendly applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[120px]
              transform hover:scale-105 hover:-translate-y-1 cursor-pointer animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
              title={skill.name}
            >
              {skill.icon}
              <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
