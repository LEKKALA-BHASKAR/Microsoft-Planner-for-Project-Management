import React from 'react';
import { User, Award, BookOpen } from 'lucide-react';

const AboutAuthors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the <span className="text-[#0078D4]">Authors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals behind the Microsoft Planner for Project Management series
          </p>
        </div>

        {/* James Bulmer Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="flex flex-col lg:flex-row">
            {/* Image Placeholder */}
            <div className="lg:w-1/3 bg-gradient-to-br from-[#0078D4] to-[#005a9d] flex items-center justify-center p-8 lg:p-12">
              <div className="text-center text-white">
                <div className="w-32 h-32 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <User size={64} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">James Bulmer</h3>
                <p className="text-blue-100">Management Consultant</p>
                <p className="text-blue-100">35+ Years Experience</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:w-2/3 p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <Award className="text-[#0078D4] mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">James Bulmer</h3>
              </div>
              
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  James Bulmer has almost 35 years' experience as a management consultant. As a consultant, I have assisted a wide variety of organizations, ranging from law enforcement to pharmaceuticals to one of the largest gaming organizations in North America. I have participated in the definition, development, and implementation of a wide variety of enterprise-wide project portfolio management solutions.
                </p>
                
                <p>
                  I was Technical Sales Manager for BeMo for nine years. BeMo is a Microsoft Gold partner / CSP that specializes in cyber security and work management solutions. I performed both pre and post sales activities, including assisting organizations in configuring and implementing hosted Project Server as well as Microsoft Project Online.
                </p>
                
                <p>
                  As BeMo moved in the sale and support of Microsoft Project Online, I developed a structured approach to the initial configuration of the Microsoft solution. This process consisted of a series of structured reviews with the client's decision makers about how they wanted to configure Project Online's functionality. The result was an operational Project Online system that was properly configured as well as fully documented.
                </p>
                
                <p>
                  In August 2013 I published "Microsoft Project Server 2013 for Enterprise Project Management". This is an update of my 2010 book. It was designed for project managers / planners using Microsoft Project Professional / Microsoft Project Desktop connected to Project Server 2013.
                </p>
                
                <p>
                  I was the developer and presenter of the Project Manager and System Developer portions of Microsoft's "Deploying the Microsoft Solution for Enterprise Project Management" DVD. I was the developer and presenter for the "Microsoft Office Enterprise Project Management Solution End User Training" DVD and "Microsoft Office Enterprise Project Management Solution Planning Team Training" DVD.
                </p>
                
                <p>
                  I was one of the developers of Microsoft's "Enterprise Project Management University – EPMU 2003" curriculum. I facilitated various EPMU classes in India, Australia, and Canada.
                </p>
                
                <p>
                  I have a Bachelor of Commerce degree from Concordia University in Montreal. I am a Microsoft Certified Professional (MCP) since 2005, a Microsoft Specialist (MS) in Managing Projects with Microsoft Project 2013, in Managing Project and Portfolios with Project Server 2013 a Microsoft Certified Technology Specialist (MCTS), and a Microsoft Certified IT Professional (MCITP).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cindy M. Lewis Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Content */}
            <div className="lg:w-2/3 p-8 lg:p-12 order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <BookOpen className="text-[#0078D4] mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Cindy M. Lewis</h3>
              </div>
              
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Cindy M. Lewis has over 25 years of experience in project management, As a passionate consultant and trainer I help individuals and corporations achieve their goals with Microsoft Project, Project Online, and Project for the web (aka the "new" Planner). I am a Microsoft Certified Trainer (MCT) and Most Valuable Professional (MVP) in Project, as well as a respected author, speaker, and facilitator.
                </p>
                
                <p>
                  As the founder and owner of 4 Pillars of Success®, I provide tailored project management solutions, expert-level consulting and training, scheduler certification, schedule audits, and template development. I also deliver interactive learning engagements with Davenport University's Institute for Professional Excellence (IPEx) and teach project management at Grand Valley State University. My mission is to deliver business value in a short timeframe and empower my clients with the best practices and tools for project success.
                </p>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Professional Highlights:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Microsoft Certified Trainer (MCT)</li>
                  <li>Microsoft Most Valuable Professional (MVP) in Project</li>
                  <li>Founder and Owner of 4 Pillars of Success®</li>
                  <li>Interactive Learning Engagements with Davenport University's Institute for Professional Excellence (IPEx)</li>
                  <li>Project Management Instructor at Grand Valley State University</li>
                </ul>
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="lg:w-1/3 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-8 lg:p-12 order-1 lg:order-2">
              <div className="text-center text-white">
                <div className="w-32 h-32 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <User size={64} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Cindy M. Lewis</h3>
                <p className="text-purple-100">Project Management Expert</p>
                <p className="text-purple-100">25+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Expertise Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0078D4] to-purple-500 rounded-xl shadow-lg p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Combined Expertise</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Together, James and Cindy bring over 60 years of combined experience in project management, 
            Microsoft technologies, and enterprise solutions. Their comprehensive understanding of both 
            traditional and modern project management approaches makes this book series an invaluable 
            resource for professionals at all levels.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60+</div>
              <div className="text-blue-100">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-blue-100">Comprehensive Books</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-blue-100">Projects Enabled</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthors;