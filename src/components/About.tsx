import React from 'react';
import { Code, Palette, Lightbulb, Briefcase, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full animate-scale-in" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Full Stack Developer | Problem Solver | Technology Enthusiast
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a highly skilled Full Stack Developer with expertise in building dynamic, responsive, and efficient web applications. With a background in Computer Science and Engineering, I leverage modern technologies like React, Django, Node.js, and Java to deliver high-quality software solutions that align with business needs and deliver exceptional user experiences.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I approach every project with a focus on clean, maintainable code, and I am committed to creating solutions that are both scalable and performant. As a problem solver, I thrive in collaborative environments where I can apply my technical and analytical skills to overcome challenges and drive continuous improvement.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[ 
                { icon: <Code size={20} />, label: 'Clean & Maintainable Code' },
                { icon: <Palette size={20} />, label: 'UI/UX Design' },
                { icon: <Lightbulb size={20} />, label: 'Problem Solving' },
                { icon: <Zap size={20} />, label: 'Quick Learning & Adaptability' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 hover:scale-105 transition-transform">
                  <div className="text-blue-600 dark:text-blue-400">{item.icon}</div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{item.label}</span>
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {[
    { icon: <Code size={20} />, label: 'Web Development (React, JavaScript)' },
    { icon: <GitBranch size={20} />, label: 'Version Control (Git, GitHub)' },
    // { icon: <Zap size={20} />, label: 'API Integration (REST, GraphQL)' },
    { icon: <Lightbulb size={20} />, label: 'Backend Development (Node.js, Django)' },
    { icon: <Palette size={20} />, label: 'Database Management (MongoDB, PostgreSQL)' },
    // { icon: <Zap size={20} />, label: 'Cloud Deployment (AWS, Docker)' },
  ].map((item, i) => (
    <div key={i} className="flex items-center space-x-2 hover:scale-105 transition-transform">
      <div className="text-blue-600 dark:text-blue-400">{item.icon}</div>
      <span className="text-gray-800 dark:text-gray-200 font-medium">{item.label}</span>
    </div>
  ))}
</div>

          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up">
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl transition-transform group-hover:scale-105">
                <img
                  src="/src/Asset/photo.jpeg"
                  alt="Tamil Selvan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Professional Experience</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I have had the opportunity to work with companies and clients across a variety of industries, helping them build software solutions that meet their needs and exceed expectations. My experience includes working on both front-end and back-end development, with a focus on delivering scalable and efficient systems.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Developed and maintained multiple full-stack web applications using React, Django, and Node.js.</span>
            </li>
            <li className="flex items-center space-x-2">
              <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Collaborated with cross-functional teams to design and implement features for client-facing applications.</span>
            </li>
            <li className="flex items-center space-x-2">
              <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Led code reviews and implemented best practices for code quality and maintainability.</span>
            </li>
          </ul>
        </div>

        {/* Technical Skills Section
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Technical Skills</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            My technical skill set spans a wide range of technologies. I'm comfortable working in both front-end and back-end environments and have a deep understanding of modern software development practices.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-gray-700 dark:text-gray-300">React</div>
            <div className="text-gray-700 dark:text-gray-300">Node.js</div>
            <div className="text-gray-700 dark:text-gray-300">Django</div>
            <div className="text-gray-700 dark:text-gray-300">JavaScript (ES6+)</div>
            <div className="text-gray-700 dark:text-gray-300">CSS3</div>
            <div className="text-gray-700 dark:text-gray-300">MongoDB</div>
            <div className="text-gray-700 dark:text-gray-300">PostgreSQL</div>
            <div className="text-gray-700 dark:text-gray-300">Git & GitHub</div>
            <div className="text-gray-700 dark:text-gray-300">Docker</div>
            <div className="text-gray-700 dark:text-gray-300">AWS</div>
          </div>
        </div> */}

        {/* Soft Skills Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Soft Skills</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            As a developer, it's just as important to work well with teams, communicate effectively, and adapt to new challenges. Here are some of the soft skills I bring to every project:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Excellent problem-solving and critical thinking abilities</li>
            <li>Strong communication and collaboration skills</li>
            <li>Effective time management and prioritization</li>
            <li>Adaptability to new technologies and tools</li>
            <li>Attention to detail and focus on quality</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
