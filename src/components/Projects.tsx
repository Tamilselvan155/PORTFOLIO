import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  ShoppingCart,
  ShoppingBag,
  Utensils,
  BrainCircuit,
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  icon: React.ReactNode;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Online Shopping Platform',
      description: 'React-based e-commerce site with authentication, product catalog, and payments.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Redux', 'Tailwind', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <ShoppingCart size={20} />,
      category: 'Web App',
    },
    {
      id: 2,
      title: 'Grocery Delivery App',
      description: 'Django-based platform for grocery ordering, with admin dashboard.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Django', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <ShoppingBag size={20} />,
      category: 'Web App',
    },
    {
      id: 3,
      title: 'AI Nutrition Guide',
      description: 'ML app with NLP to generate diet plans based on health data.',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'NLP', 'Flask', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <BrainCircuit size={20} />,
      category: 'ML/AI',
    }
  ];

  const filters = ['All', 'Web App', 'ML/AI'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Projects</h2>
          <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A collection of work showcasing real-world problem solving using modern web and AI technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="relative group h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="text-white hover:text-gray-300" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="text-white hover:text-gray-300" />
                  </a>
                </div>
              </div>
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-center mb-2 text-blue-600 dark:text-blue-400">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">{project.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-800 dark:text-gray-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
