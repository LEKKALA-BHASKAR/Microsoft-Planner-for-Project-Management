import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutAuthors from './components/AboutAuthors';
import ContactUs from './components/ContactUs';
import AdminContacts from './components/admin'


function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutAuthors />;
      case 'contact':
        return <ContactUs />;
      case 'admin':
        return <AdminContacts/>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="overflow-x-hidden">
        {renderCurrentSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Microsoft Planner for Project Management Series</h3>
            <p className="text-gray-400 mb-6">
              Comprehensive guides for modern project management using Microsoft's latest tools
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 James Bulmer & Cindy M. Lewis. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;