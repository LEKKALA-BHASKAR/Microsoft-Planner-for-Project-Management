import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroWithBookSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bookImages = [
    "/images/book1.png",
    "/images/book2.png",
    "/images/book3.png",
    "/images/book4.png"
  ];

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bookImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-12 px-6 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Microsoft Planner Series <br />
                <span className="text-yellow-300">For Project Management</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-lg">
                  Comprehensive guide series for modern project management using
                  Microsoft's latest tools.
                </p>
                
                <p>
                  <strong>Microsoft Planner for Project Management</strong> series was
                  written for professionals developing {' '}, maintaining {' '}, and {' '}
                  managing projects using Microsoft's powerful combination of {' '}
                  <span className="text-yellow-300 font-medium">Planner</span> {'  '}and  {'  '}
                  <span className="text-yellow-300 font-medium">Power Apps Project{' '}</span>.
                   Together with Power Apps Project, Planner is part of the
                  <span className="text-yellow-300 font-medium">Microsoft Project</span>
                  ecosystem  including Project Desktop Client and Project for the web.
                </p>

               

                <p className="text-lg font-medium">
                  This series covers everything from simple task lists to complex plans with{' '}
                  <span className="font-bold text-yellow-300">9,000+ tasks</span> per project.
                </p>

                {/* Microsoft quote moved to the end of text */}
                <div className="bg-blue-800/50 p-4 rounded-lg border-l-4 border-yellow-400 mt-6">
                  <p className="italic">
                    "Planner is an intuitive, collaborative task management tool
                    within the Microsoft 365 suite. It helps teams easily plan,
                    manage, and complete tasks using kanban boards and task cards."
                  </p>
                  <p className="text-right text-blue-200 mt-2">— Microsoft</p>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Book Slider */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-lg h-[28rem]"> {/* Increased size */}
                {bookImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center p-4" /* Added padding */
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      x: index === currentSlide ? 0 : 100,
                      scale: index === currentSlide ? 1 : 0.95,
                      zIndex: index === currentSlide ? 10 : 1
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={image}
                        alt={`Book ${index + 1}`}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                      {/* Enhanced book cover effect */}
                    </div>
                  </motion.div>
                ))}
                
                {/* Enhanced slide indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
                  {bookImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-yellow-400 w-8 scale-125' : 'bg-white/50 hover:bg-white/70'}`}
                    />
                  ))}
                </div>
                
                {/* Enhanced background effects */}
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-xl blur-xl -z-10"></div>
                <div className="absolute -inset-12 bg-blue-500/5 rounded-full blur-lg -z-20"></div>
                
                {/* Subtle reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent rounded-b-lg -z-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-white py-12 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4", label: "Comprehensive Books" },
              { value: "9,000+", label: "Tasks per Project" },
              { value: "150+", label: "Resources Supported" },
              { value: "100%", label: "Microsoft Cloud Integrated" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-all"
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-blue-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithBookSlider;