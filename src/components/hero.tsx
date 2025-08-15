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

             
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <img
                  src="../images/logo1.jpg"
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