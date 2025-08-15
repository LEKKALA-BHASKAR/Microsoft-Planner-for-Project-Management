import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-16 px-6 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Microsoft Planner for <br />
                <span className="text-yellow-300">Project Management</span>
              </h1>
              
              <div className="space-y-4 text-lg">
                <p>
                  Comprehensive guide series for modern project management using
                  Microsoft's latest tools.
                </p>
                
                <p>
                  <strong>Microsoft Planner for Project Management</strong> series was
                  written for professionals developing, maintaining, and
                  managing projects using Microsoft's powerful combination of{' '}
                  <span className="text-yellow-300 font-medium">Planner</span> and{' '}
                  <span className="text-yellow-300 font-medium">Power Apps Project</span>.
                </p>

                <div className="bg-blue-800/50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="italic">
                    "Planner is an intuitive, collaborative task management tool
                    within the Microsoft 365 suite. It helps teams easily plan,
                    manage, and complete tasks using kanban boards and task cards."
                  </p>
                  <p className="text-right text-blue-200 mt-2">— Microsoft</p>
                </div>

                <p>
                  Together with Power Apps Project, Planner is part of the{' '}
                  <span className="text-yellow-300 font-medium">Microsoft Project</span>{' '}
                  ecosystem — including Project Desktop Client and Project for the web.
                </p>

                <p className="text-xl">
                  This series covers everything from simple task lists to complex plans with{' '}
                  <span className="font-bold text-yellow-300">9,000+ tasks</span> per project.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center">
                  <span>Explore the Series</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-transparent hover:bg-blue-800/50 border-2 border-white text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center">
                  <span>View Sample Chapters</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <img
                  src="../public/images/GroupLogo.jpg"
                  alt="Microsoft Planner Logo"
                  className="w-full h-auto drop-shadow-2xl animate-float"
                />
                <div className="absolute -inset-8 bg-blue-600/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white py-12 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5", label: "Comprehensive Books" },
              { value: "9,000", label: "Tasks per Project" },
              { value: "150", label: "Resources Supported" },
              { value: "100%", label: "Microsoft Cloud Integrated" }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-blue-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;