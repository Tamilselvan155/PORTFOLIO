import React from 'react';
import { Briefcase, GraduationCap, Award, FileText } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'course' | 'certification' | 'work';
}

const Experience: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Bachelor of Engineering in Computer Science",
      organization: "Sathyabama Institute of Science and Technology",
      period: "2020 - 2024",
      description: "Graduated with a CGPA of 8.3. Focused on software development, web technologies, and machine learning. Completed major projects in NLP and web development.",
      type: "education"
    },
    {
      id: 2,
      title: "React JS Web App Development",
      organization: "PRIDE-Sathyabama Institute",
      period: "Feb 2023 - Apr 2023",
      description: "Developed an online shopping platform using React JS. Implemented user authentication, product catalog, and shopping cart functionality.",
      type: "work"
    },
    {
      id: 3,
      title: "Django Web Development",
      organization: "PRIDE-Sathyabama Institute",
      period: "Jul 2023 - Oct 2023",
      description: "Created an online grocery store application using Django. Built features for inventory management, order processing, and user accounts.",
      type: "work"
    },
    {
      id: 4,
      title: "Higher Secondary Education",
      organization: "Alpha Matriculation Higher Secondary School",
      period: "2018 - 2020",
      description: "Completed higher secondary education with a focus on Mathematics, Physics, Chemistry, and Biology.",
      type: "education"
    },
    {
      id: 5,
      title: "Java Full Stack Development",
      organization: "J Spiders",
      period: "2023",
      description: "Completed comprehensive training in Java full stack development, covering core Java, Spring Boot, and web technologies.",
      type: "course"
    },
    {
      id: 6,
      title: "Full Stack Web Development Certification",
      organization: "Coursera",
      period: "2023",
      description: "Received certification for completing the Full Stack Web Development course, which covered both front-end and back-end technologies.",
      type: "certification"
    }
  ];

  const categories = {
    education: "Education",
    work: "Work Experience",
    course: "Courses & Training",
    certification: "Certifications"
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic and professional journey that has shaped my skills and expertise.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 transform md:translate-x-[-50%]" />

          <div className="space-y-12">
            {Object.keys(categories).map((category) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">{categories[category as keyof typeof categories]}</h3>
                <div className="space-y-12">
                  {timelineItems
                    .filter((item) => item.type === category)
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                      >
                        <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full transform translate-x-[-50%] flex items-center justify-center z-10">
                          {item.type === 'education' ? (
                            <GraduationCap size={16} className="text-white" />
                          ) : item.type === 'work' ? (
                            <Briefcase size={16} className="text-white" />
                          ) : item.type === 'course' ? (
                            <FileText size={16} className="text-white" />
                          ) : (
                            <Award size={16} className="text-white" />
                          )}
                        </div>

                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                            <span
                              className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide uppercase ${
                                item.type === 'education'
                                  ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300'
                                  : item.type === 'work'
                                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                                  : item.type === 'course'
                                  ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                                  : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
                              }`}
                            >
                              {categories[item.type]}
                            </span>

                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{item.organization}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 italic">{item.period}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
