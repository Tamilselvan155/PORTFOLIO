// // import React from 'react';
// // import { Briefcase, GraduationCap, Award, FileText } from 'lucide-react';

// // interface TimelineItem {
// //   id: number;
// //   title: string;
// //   organization: string;
// //   period: string;
// //   description: string;
// //   type: 'education' | 'course' | 'certification' | 'work';
// // }

// // const Experience: React.FC = () => {
// //   const timelineItems: TimelineItem[] = [
// //     {
// //       id: 1,
// //       title: "Bachelor of Engineering in Computer Science",
// //       organization: "Sathyabama Institute of Science and Technology",
// //       period: "2020 - 2024",
// //       description: "Graduated with a CGPA of 8.3. Focused on software development, web technologies, and machine learning. Completed major projects in NLP and web development.",
// //       type: "education"
// //     },
// //     {
// //       id: 2,
// //       title: "React JS Web App Development",
// //       organization: "PRIDE-Sathyabama Institute",
// //       period: "Feb 2023 - Apr 2023",
// //       description: "Developed an online shopping platform using React JS. Implemented user authentication, product catalog, and shopping cart functionality.",
// //       type: "work"
// //     },
// //     {
// //       id: 3,
// //       title: "Django Web Development",
// //       organization: "PRIDE-Sathyabama Institute",
// //       period: "Jul 2023 - Oct 2023",
// //       description: "Created an online grocery store application using Django. Built features for inventory management, order processing, and user accounts.",
// //       type: "work"
// //     },
// //     {
// //       id: 4,
// //       title: "Higher Secondary Education",
// //       organization: "Alpha Matriculation Higher Secondary School",
// //       period: "2018 - 2020",
// //       description: "Completed higher secondary education with a focus on Mathematics, Physics, Chemistry, and Biology.",
// //       type: "education"
// //     },
// //     {
// //       id: 5,
// //       title: "Java Full Stack Development",
// //       organization: "J Spiders",
// //       period: "2023",
// //       description: "Completed comprehensive training in Java full stack development, covering core Java, Spring Boot, and web technologies.",
// //       type: "course"
// //     },
// //     {
// //       id: 6,
// //       title: "Full Stack Web Development Certification",
// //       organization: "Coursera",
// //       period: "2023",
// //       description: "Received certification for completing the Full Stack Web Development course, which covered both front-end and back-end technologies.",
// //       type: "certification"
// //     }
// //   ];

// //   const categories = {
// //     education: "Education",
// //     work: "Work Experience",
// //     course: "Courses & Training",
// //     certification: "Certifications"
// //   };

// //   return (
// //     <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
// //       <div className="container mx-auto px-6 md:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
// //           <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
// //           <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
// //             My academic and professional journey that has shaped my skills and expertise.
// //           </p>
// //         </div>

// //         <div className="relative max-w-4xl mx-auto">
// //           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 transform md:translate-x-[-50%]" />

// //           <div className="space-y-12">
// //             {Object.keys(categories).map((category) => (
// //               <div key={category}>
// //                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">{categories[category as keyof typeof categories]}</h3>
// //                 <div className="space-y-12">
// //                   {timelineItems
// //                     .filter((item) => item.type === category)
// //                     .map((item, index) => (
// //                       <div
// //                         key={item.id}
// //                         className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
// //                       >
// //                         <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full transform translate-x-[-50%] flex items-center justify-center z-10">
// //                           {item.type === 'education' ? (
// //                             <GraduationCap size={16} className="text-white" />
// //                           ) : item.type === 'work' ? (
// //                             <Briefcase size={16} className="text-white" />
// //                           ) : item.type === 'course' ? (
// //                             <FileText size={16} className="text-white" />
// //                           ) : (
// //                             <Award size={16} className="text-white" />
// //                           )}
// //                         </div>

// //                         <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
// //                           <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
// //                             <span
// //                               className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide uppercase ${
// //                                 item.type === 'education'
// //                                   ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300'
// //                                   : item.type === 'work'
// //                                   ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
// //                                   : item.type === 'course'
// //                                   ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
// //                                   : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
// //                               }`}
// //                             >
// //                               {categories[item.type]}
// //                             </span>

// //                             <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
// //                             <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{item.organization}</p>
// //                             <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 italic">{item.period}</p>
// //                             <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Experience;



// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Briefcase, 
//   GraduationCap, 
//   Award, 
//   FileText, 
//   Calendar,
//   MapPin,
//   ChevronDown,
//   ChevronUp,
//   Clock,
//   Star,
//   TrendingUp,
//   Users,
//   Target,
//   Filter
// } from 'lucide-react';

// const Experience = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [expandedItems, setExpandedItems] = useState(new Set());
//   const [visibleItems, setVisibleItems] = useState(new Set());
//   const [isVisible, setIsVisible] = useState(false);
//   const timelineRef = useRef(null);

//   useEffect(() => {
//     setIsVisible(true);
    
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const itemId = entry.target.getAttribute('data-item-id');
//             if (itemId) {
//               setVisibleItems(prev => new Set([...prev, itemId]));
//             }
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const timelineItems = document.querySelectorAll('.timeline-item');
//     timelineItems.forEach(item => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   const timelineItems = [
//     {
//       id: 1,
//       title: "Bachelor of Engineering in Computer Science",
//       organization: "Sathyabama Institute of Science and Technology",
//       location: "Chennai, India",
//       period: "2020 - 2024",
//       duration: "4 years",
//       description: "Graduated with a CGPA of 8.3. Focused on software development, web technologies, and machine learning. Completed major projects in NLP and web development.",
//       type: "education",
//       highlights: ["CGPA: 8.3/10", "Machine Learning Projects", "Web Development Focus", "NLP Research"],
//       skills: ["Python", "Java", "Machine Learning", "Web Development"],
//       achievements: "Top 10% of graduating class"
//     },
//     {
//       id: 2,
//       title: "React JS Web App Development",
//       organization: "PRIDE-Sathyabama Institute",
//       location: "Chennai, India",
//       period: "Feb 2023 - Apr 2023",
//       duration: "3 months",
//       description: "Developed an online shopping platform using React JS. Implemented user authentication, product catalog, and shopping cart functionality.",
//       type: "work",
//       highlights: ["React.js Development", "User Authentication", "E-commerce Features", "State Management"],
//       skills: ["React.js", "JavaScript", "HTML/CSS", "REST APIs"],
//       achievements: "Delivered project 2 weeks ahead of schedule"
//     },
//     {
//       id: 3,
//       title: "Django Web Development",
//       organization: "PRIDE-Sathyabama Institute",
//       location: "Chennai, India",
//       period: "Jul 2023 - Oct 2023",
//       duration: "4 months",
//       description: "Created an online grocery store application using Django. Built features for inventory management, order processing, and user accounts.",
//       type: "work",
//       highlights: ["Django Framework", "Database Design", "Admin Panel", "Payment Integration"],
//       skills: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
//       achievements: "Implemented advanced inventory management system"
//     },
//     {
//       id: 4,
//       title: "Higher Secondary Education",
//       organization: "Alpha Matriculation Higher Secondary School",
//       location: "Tamil Nadu, India",
//       period: "2018 - 2020",
//       duration: "2 years",
//       description: "Completed higher secondary education with a focus on Mathematics, Physics, Chemistry, and Biology.",
//       type: "education",
//       highlights: ["Science Stream", "Mathematics Excellence", "Physics & Chemistry", "Strong Foundation"],
//       skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
//       achievements: "Scored 85% in board examinations"
//     },
//     {
//       id: 5,
//       title: "Java Full Stack Development",
//       organization: "J Spiders",
//       location: "Chennai, India",
//       period: "2023",
//       duration: "6 months",
//       description: "Completed comprehensive training in Java full stack development, covering core Java, Spring Boot, and web technologies.",
//       type: "course",
//       highlights: ["Core Java", "Spring Boot", "Database Integration", "REST APIs"],
//       skills: ["Java", "Spring Boot", "MySQL", "REST APIs"],
//       achievements: "Completed with distinction"
//     },
//     {
//       id: 6,
//       title: "Full Stack Web Development Certification",
//       organization: "Coursera",
//       location: "Online",
//       period: "2023",
//       duration: "4 months",
//       description: "Received certification for completing the Full Stack Web Development course, which covered both front-end and back-end technologies.",
//       type: "certification",
//       highlights: ["Frontend Technologies", "Backend Development", "Database Management", "Deployment"],
//       skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
//       achievements: "Verified certificate with honors"
//     }
//   ];

//   const categories = {
//     all: { name: "All Experience", icon: <Target size={16} />, color: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200" },
//     education: { name: "Education", icon: <GraduationCap size={16} />, color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300" },
//     work: { name: "Work Experience", icon: <Briefcase size={16} />, color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300" },
//     course: { name: "Courses & Training", icon: <FileText size={16} />, color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300" },
//     certification: { name: "Certifications", icon: <Award size={16} />, color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300" }
//   };

//   const getFilteredItems = () => {
//     if (activeFilter === 'all') return timelineItems;
//     return timelineItems.filter(item => item.type === activeFilter);
//   };

//   const toggleExpanded = (itemId) => {
//     setExpandedItems(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(itemId)) {
//         newSet.delete(itemId);
//       } else {
//         newSet.add(itemId);
//       }
//       return newSet;
//     });
//   };

//   const TypeIcon = ({ type, size = 16 }) => {
//     const iconProps = { size, className: "text-white" };
//     switch (type) {
//       case 'education': return <GraduationCap {...iconProps} />;
//       case 'work': return <Briefcase {...iconProps} />;
//       case 'course': return <FileText {...iconProps} />;
//       case 'certification': return <Award {...iconProps} />;
//       default: return <Target {...iconProps} />;
//     }
//   };

//   const filteredItems = getFilteredItems();

//   return (
//     <section id="experience" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-20 dark:opacity-10">
//         <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full blur-xl animate-pulse delay-500"></div>
//       </div>

//       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* Header Section */}
//         <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 transform ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
//             Experience & Education
//             <span className="block text-lg sm:text-xl lg:text-2xl font-normal text-blue-600 dark:text-blue-400 mt-2">
//               Journey of Growth & Learning
//             </span>
//           </h2>
//           <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-lg mb-4 sm:mb-6"></div>
//           <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
//             My academic and professional journey that has shaped my skills, expertise, and passion for technology.
//           </p>
//         </div>

//         {/* Filter Section */}
//         <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-300 transform ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <div className="flex items-center justify-center mb-6 sm:mb-8">
//             <Filter size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
//               Filter Experience
//             </h3>
//           </div>
          
//           <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
//             {Object.entries(categories).map(([key, category]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveFilter(key)}
//                 className={`group flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg ${
//                   activeFilter === key
//                     ? 'bg-blue-600 text-white shadow-lg scale-105'
//                     : category.color + ' hover:shadow-md'
//                 }`}
//               >
//                 <span className="group-hover:rotate-12 transition-transform duration-300">
//                   {category.icon}
//                 </span>
//                 <span className="hidden sm:inline">{category.name}</span>
//                 <span className="sm:hidden">{category.name.split(' ')[0]}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-500 transform ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           {[
//             { icon: <GraduationCap />, value: '2', label: 'Degrees' },
//             { icon: <Briefcase />, value: '3', label: 'Projects' },
//             { icon: <Award />, value: '4', label: 'Certificates' },
//             { icon: <TrendingUp />, value: '4+', label: 'Years Learning' }
//           ].map((stat, idx) => (
//             <div key={idx} className="text-center p-4 sm:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 group">
//               <div className="text-blue-600 dark:text-blue-400 mb-2 sm:mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
//                 {React.cloneElement(stat.icon, { size: 24 })}
//               </div>
//               <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
//                 {stat.value}
//               </div>
//               <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Timeline Section */}
//         <div className="relative max-w-6xl mx-auto" ref={timelineRef}>
//           {/* Timeline Line - Responsive */}
//           <div className="absolute left-6 sm:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 dark:from-blue-800 dark:via-purple-800 dark:to-blue-800 lg:transform lg:-translate-x-1/2 rounded-full"></div>

//           <div className="space-y-8 sm:space-y-12 lg:space-y-16">
//             {filteredItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 data-item-id={item.id}
//                 className={`timeline-item relative transition-all duration-1000 transform ${
//                   visibleItems.has(item.id.toString()) 
//                     ? 'translate-y-0 opacity-100' 
//                     : 'translate-y-10 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 {/* Timeline Node */}
//                 <div className="absolute left-4 sm:left-6 lg:left-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full lg:transform lg:-translate-x-1/2 flex items-center justify-center z-10 shadow-lg hover:scale-110 transition-all duration-300 group">
//                   <TypeIcon type={item.type} size={16} />
//                   <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-75 animate-pulse"></div>
//                 </div>

//                 {/* Content Card */}
//                 <div className={`lg:w-1/2 ${
//                   index % 2 === 0 
//                     ? 'ml-16 sm:ml-20 lg:ml-0 lg:pr-16' 
//                     : 'ml-16 sm:ml-20 lg:ml-auto lg:pl-16'
//                 }`}>
//                   <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group">
//                     {/* Type Badge */}
//                     <div className="flex items-center justify-between mb-4">
//                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase ${categories[item.type].color}`}>
//                         <span className="mr-2">{categories[item.type].icon}</span>
//                         {categories[item.type].name}
//                       </span>
//                       <button
//                         onClick={() => toggleExpanded(item.id)}
//                         className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
//                       >
//                         {expandedItems.has(item.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                       </button>
//                     </div>

//                     {/* Title and Organization */}
//                     <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
//                       {item.title}
//                     </h3>
//                     <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm sm:text-base lg:text-lg">
//                       {item.organization}
//                     </p>

//                     {/* Meta Information */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
//                       <div className="flex items-center text-gray-600 dark:text-gray-400">
//                         <Calendar size={14} className="mr-2 flex-shrink-0" />
//                         <span className="truncate">{item.period}</span>
//                       </div>
//                       <div className="flex items-center text-gray-600 dark:text-gray-400">
//                         <Clock size={14} className="mr-2 flex-shrink-0" />
//                         <span className="truncate">{item.duration}</span>
//                       </div>
//                       <div className="flex items-center text-gray-600 dark:text-gray-400 sm:col-span-2">
//                         <MapPin size={14} className="mr-2 flex-shrink-0" />
//                         <span className="truncate">{item.location}</span>
//                       </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
//                       {item.description}
//                     </p>

//                     {/* Expandable Content */}
//                     <div className={`overflow-hidden transition-all duration-500 ${
//                       expandedItems.has(item.id) 
//                         ? 'max-h-96 opacity-100' 
//                         : 'max-h-0 opacity-0'
//                     }`}>
//                       <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                         {/* Highlights */}
//                         <div>
//                           <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
//                             <Star size={16} className="mr-2 text-yellow-500" />
//                             Key Highlights
//                           </h4>
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                             {item.highlights.map((highlight, idx) => (
//                               <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                                 <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
//                                 <span className="truncate">{highlight}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Skills */}
//                         <div>
//                           <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
//                             <Target size={16} className="mr-2 text-green-500" />
//                             Skills Gained
//                           </h4>
//                           <div className="flex flex-wrap gap-2">
//                             {item.skills.map((skill, idx) => (
//                               <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Achievement */}
//                         {item.achievements && (
//                           <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 p-3 rounded-lg border border-green-200 dark:border-green-800">
//                             <h4 className="font-semibold text-gray-900 dark:text-white mb-1 flex items-center text-sm">
//                               <Award size={14} className="mr-2 text-green-600 dark:text-green-400" />
//                               Achievement
//                             </h4>
//                             <p className="text-sm text-gray-700 dark:text-gray-300">{item.achievements}</p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Summary Section */}
//         <div className={`mt-16 sm:mt-20 lg:mt-24 text-center transition-all duration-1000 delay-1000 transform ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
//               Ready for New Challenges
//             </h3>
//             <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 leading-relaxed">
//               With a strong foundation in full-stack development and continuous learning mindset, 
//               I'm excited to take on new challenges and contribute to innovative projects.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
//                 View My Projects
//               </button>
//               <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
//                 Contact Me
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

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
      description:
        "Graduated with a CGPA of 8.3. Focused on software development, web technologies, and machine learning. Completed major projects in NLP and web development.",
      type: "education",
    },
    {
      id: 2,
      title: "React JS Web App Development",
      organization: "PRIDE-Sathyabama Institute",
      period: "Feb 2023 - Apr 2023",
      description:
        "Developed an online shopping platform using React JS. Implemented user authentication, product catalog, and shopping cart functionality.",
      type: "work",
    },
    {
      id: 3,
      title: "Django Web Development",
      organization: "PRIDE-Sathyabama Institute",
      period: "Jul 2023 - Oct 2023",
      description:
        "Created an online grocery store application using Django. Built features for inventory management, order processing, and user accounts.",
      type: "work",
    },
    {
      id: 4,
      title: "Higher Secondary Education",
      organization: "Alpha Matriculation Higher Secondary School",
      period: "2018 - 2020",
      description:
        "Completed higher secondary education with a focus on Mathematics, Physics, Chemistry, and Biology.",
      type: "education",
    },
    {
      id: 5,
      title: "Java Full Stack Development",
      organization: "J Spiders",
      period: "2023",
      description:
        "Completed comprehensive training in Java full stack development, covering core Java, Spring Boot, and web technologies.",
      type: "course",
    },
    {
      id: 6,
      title: "Full Stack Web Development Certification",
      organization: "Coursera",
      period: "2023",
      description:
        "Received certification for completing the Full Stack Web Development course, which covered both front-end and back-end technologies.",
      type: "certification",
    },
  ];

  const categories = {
    education: "Education",
    work: "Work Experience",
    course: "Courses & Training",
    certification: "Certifications",
  };

  // Icon mapper
  const iconMap = {
    education: <GraduationCap size={20} className="text-white" />,
    work: <Briefcase size={20} className="text-white" />,
    course: <FileText size={20} className="text-white" />,
    certification: <Award size={20} className="text-white" />,
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">
            My academic and professional journey that has shaped my skills and
            expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line on left */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-blue-200 dark:bg-blue-900 rounded-full"></div>

          {Object.keys(categories).map((category) => (
            <div key={category} className="mb-16">
              {/* Category title */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10 text-center">
                {categories[category as keyof typeof categories]}
              </h3>

              <div className="space-y-12">
                {timelineItems
                  .filter((item) => item.type === category)
                  .map((item) => (
                    <div key={item.id} className="relative flex items-start">
                      {/* Icon circle on timeline line */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center shadow-lg relative z-10">
                        {iconMap[item.type]}
                      </div>

                      {/* Content box */}
                      <div className="ml-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 w-full hover:shadow-xl transition-shadow duration-300">
                        <span
                          className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3 tracking-wide uppercase ${
                            item.type === "education"
                              ? "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300"
                              : item.type === "work"
                              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                              : item.type === "course"
                              ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300"
                              : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                          }`}
                        >
                          {categories[item.type]}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {item.organization}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 italic">
                          {item.period}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
