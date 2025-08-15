import React from 'react';
import { User, Award, BookOpen, Briefcase, Bookmark, CheckCircle, Star } from 'lucide-react';

const AboutAuthors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-blue-100 rounded-full mb-6">
            <Star className="text-blue-600 mr-2" size={18} />
            <span className="text-blue-600 font-medium">The Masterminds Behind</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Microsoft Planner <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] to-blue-600">Experts</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the brilliant minds with 60+ years combined experience revolutionizing project management
          </p>
        </div>

        {/* James Bulmer - Modern Card */}
        <div className="relative mb-28">
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-blue-100 opacity-20 blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-blue-200 opacity-10 blur-xl"></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              {/* Author Portrait Side */}
              <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-10 flex flex-col items-center justify-center relative">
                {/* Floating circles decoration */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-white/5"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20">
                    <User size={80} className="text-white/90" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">James Bulmer</h3>
                  <div className="text-blue-100 font-medium mb-4">Management Consultant | 35+ Years</div>
                  
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">MCP</div>
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">MS</div>
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">MCTS</div>
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">MCITP</div>
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:w-2/3 p-10">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Enterprise Project Management Guru</h3>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
                  <p className="leading-relaxed">
                    With nearly <span className="font-semibold text-blue-600">35 years</span> as a management consultant, James has transformed organizations from law enforcement to pharmaceuticals to major gaming corporations. His enterprise-wide project portfolio solutions are legendary in the industry.
                  </p>
                  
                  <p className="leading-relaxed">
                    As former <span className="font-semibold">Technical Sales Manager</span> for BeMo (Microsoft Gold Partner), James architected the structured approach to configuring Microsoft Project Online that became the industry standard.
                  </p>
                  
                  <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mt-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Bookmark className="text-blue-500 mr-2" size={20} />
                      Published Works:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>"Microsoft Project Server 2013 for Enterprise Project Management"</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Microsoft's "Deploying the Microsoft Solution for Enterprise Project Management" DVD</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developer of Microsoft's "Enterprise Project Management University" curriculum</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="leading-relaxed mt-6">
                    James holds a <span className="font-semibold">Bachelor of Commerce</span> from Concordia University and multiple Microsoft certifications including MCP, MS, MCTS, and MCITP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cindy M. Lewis - Modern Card */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-purple-100 opacity-20 blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-100 opacity-10 blur-xl"></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              {/* Content Side */}
              <div className="lg:w-2/3 p-10 order-2 lg:order-1">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-purple-100 rounded-lg mr-4">
                    <Award className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Microsoft Project Visionary</h3>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
                  <p className="leading-relaxed">
                    Cindy brings <span className="font-semibold text-purple-600">25+ years</span> of project management mastery, recognized by Microsoft as both a <span className="font-semibold">Certified Trainer (MCT)</span> and <span className="font-semibold">Most Valuable Professional (MVP)</span> in Project.
                  </p>
                  
                  <p className="leading-relaxed">
                    As founder of <span className="font-semibold">4 Pillars of Success®</span>, Cindy delivers transformative project management solutions, expert consulting, and acclaimed training programs that set the industry standard.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-purple-50/50 p-5 rounded-xl border-l-4 border-purple-500">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="text-purple-500 mr-2" size={20} />
                        Academic Leadership:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Project Management Instructor at Grand Valley State University</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Davenport University's Institute for Professional Excellence</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-pink-50/50 p-5 rounded-xl border-l-4 border-pink-400">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <Star className="text-pink-500 mr-2" size={20} />
                        Core Expertise:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Schedule Certification & Audits</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Enterprise Template Development</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-pink-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span>Best Practices Implementation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Author Portrait Side */}
              <div className="lg:w-1/3 bg-gradient-to-br from-purple-600 to-pink-500 p-10 flex flex-col items-center justify-center relative order-1 lg:order-2">
                {/* Floating circles decoration */}
                <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white/10"></div>
                <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-white/5"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20">
                    <User size={80} className="text-white/90" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Cindy M. Lewis</h3>
                  <div className="text-purple-100 font-medium mb-4">Project Management Expert | 25+ Years</div>
                  
                  <div className="flex justify-center space-x-3 mt-6">
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">MCT</div>
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">MVP</div>
                    <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">PMP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Expertise - Stunning Showcase */}
        <div className="mt-28 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center px-6 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Star className="text-white mr-2" size={18} />
              <span className="text-white font-medium">Legendary Partnership</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">When Masters Collaborate</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Together, James and Cindy represent the pinnacle of Microsoft project management expertise. Their combined 60+ years of experience has shaped enterprise solutions used by Fortune 500 companies worldwide, making this book series the most authoritative resource available.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { value: "60+", label: "Years Combined Excellence", icon: <Briefcase size={32} className="text-white mx-auto mb-3" /> },
                { value: "1000+", label: "Enterprise Solutions", icon: <CheckCircle size={32} className="text-white mx-auto mb-3" /> },
                { value: "∞", label: "Knowledge Shared", icon: <BookOpen size={32} className="text-white mx-auto mb-3" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
                  {stat.icon}
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthors;