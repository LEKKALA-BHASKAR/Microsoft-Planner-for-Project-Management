import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Microsoft Planner for Project Management',
      content: 'Microsoft Planner for Project Management series was written for people who are responsible for developing and maintaining / managing projects and programs using Microsoft\'s most recent project management software Planner, combined with Power Apps Project.'
    },
    {
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Intuitive Collaborative Tool',
      content: 'As described by Microsoft "Planner is an intuitive, collaborative task management tool within the Microsoft 365 suite. It helps teams easily plan, manage, and complete tasks using kanban boards and task cards."'
    },
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Comprehensive Book Series',
      content: 'This Planner book series consists of five (5) functions / features books. Together they cover all of the most important aspects of using the Planner App plus Power Apps Project to create, build and manage project plans / schedules.'
    },
    {
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Scale from Simple to Complex',
      content: 'Plans ranging from simple task / activity lists to complex plans that have a large number of tasks / activities (current maximum is 9,000 tasks / activities per Planner Premium plan).'
    },
    {
      image: 'https://images.pexels.com/photos/7688080/pexels-photo-7688080.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Expert Authors',
      content: 'James Bulmer has almost 35 years\' experience as a management consultant and Cindy M. Lewis has over 25 years of experience in project management. Both are Microsoft Certified Professionals.'
    },
    {
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Work Management Integration',
      content: 'The new Planner App is a comprehensive work management tool that integrates the simplicity of Microsoft To Do, the collaboration features of Microsoft Planner, and the power of Microsoft Project for the web.'
    },
    {
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Two Plan Types',
      content: 'Planner supports two different types of plans — Basic and Premium. Having two types of Planner plans allows users to select which type of plan best suits their specific requirements.'
    },
    {
      image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Plans Features',
      content: 'Premium Plans include advanced features like Timeline (Gantt Chart) view, task dependencies, critical path identification, custom fields, and hierarchical task organization up to 10 levels deep.'
    },
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Teams Integration',
      content: 'Planner exists as a Team\'s App as well as a standalone app. You can integrate Planner with Teams or integrate a Planner plan with a Team, before or after plan creation.'
    },
    {
      image: 'https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Flexible Conversion',
      content: 'It is possible to convert a Basic Planner Plan to a Premium plan at any time. The conversion occurs automatically when the user selects the appropriate command option.'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gray-900 rounded-lg shadow-2xl">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Half */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              
              {/* Content Half */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-br from-[#0078D4] to-[#005a9d] flex items-center justify-center p-6 md:p-12">
                <div className="text-white text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed opacity-95">
                    {slide.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white shadow-lg' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;