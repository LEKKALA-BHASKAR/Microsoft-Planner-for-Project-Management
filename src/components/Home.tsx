import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Hero from './hero';

interface Book {
  id: string;
  title: string;
  content: string;
  image: string;
  accentColor: string;
}

const books: Book[] = [
  {
    id: "1",
    title: "Book 1: Premium Plan Initiation",
    content: `
**Premium Plans** need to be initiated / set-up — basic information provided and / or Planner options confirmed or altered. In addition, it is possible to configure Planner / Power Apps Project to allow users to associate Custom Calendars with both Premium Plans and Resources. It is also possible to configure the Power Apps Project to allow project managers to define the scheduling mode for new Premium Plans. The scheduling mode determines how Planner for detail task will schedule the Effort of the resource(s) — the person or people who will do the project related work for the Duration of the task — the amount of work time required to complete the task. This book covers the initiation of Premium Plans using the Planner App, Project Home and Power App Project. It also covers the use of the numerous Premium Plan Templates that both Planner and Project Home provide users. It also defines how to use both Microsoft Project Desktop files and existing Planner Premium Plans to generate new Premium Plans. This book also includes complete details on the use of Microsoft Copilot to initiate the creation of new Premium Plans.
`,
    image: "../images/book1.png",
    accentColor: "bg-amber-500"
  },
  {
    id: "2",
    title: "Book 2: Premium Plans Goals and Tasks",
    content: `
Planner has the capability for the project team to define the plan's goals. Project goals are a high-level or overarching vision for the project. They should focus on what will happen when the project is successful. Goals are usually long-term and achievable and should be based on facts and figures. Planner supports the capability to identify a limited set of project goals.  Planner supports two different methodologies for the organizing and visualizing of tasks / activities in Premium Plans — Work Breakdown Structure (WBS) or Kanban Boards. Both are supported by Planner and in both approaches the project's goals / objectives can be linked to tasks in the plan. 

**Key Features:**
- Define / Refine the Tasks Durations: elsewhere Microsoft has defined Duration as "the total span of active working time for a task." Tasks have Duration, the project manager / team using Planner can assign a Duration to the detail tasks in their plans.
- Set / Revise Task Dependencies & Deadlines: Task dependencies provide a way to schedule tasks based on their relationships to other tasks independent of actual dates. This way, if a task's scheduling dates change, tasks dependent on that task will also be rescheduled automatically. A task's deadline does not generally affect task scheduling. They are used to indicate a target date the project manager / team does not want to miss. A task with a Deadline is scheduled just like any other task, but when a task finishes after its Deadline, Planner displays a task indicator (it generally makes the task's Finish Date red) notifying the project manager / team that the task is missing its Deadline.
- Reviewing / Understanding Changes in the Plan: Planner offers the capability for authorized users to view the history of any task in a Premium Plan. This feature / functionality is ONLY provided to authorized users who have a PP3 or PP5 subscription.
`,
    image: "../images/book2.png",
    accentColor: "bg-green-500"
  },
  {
    id: "3",
    title: "Book 3: Premium Plans Resource Management",
    content: `
Until people / resources are assigned to tasks, no Work / Effort is associated with tasks in Planner so only task Duration can be displayed if it has been set by the project manager / team. Planner calculates the Effort for a task when Microsoft 365 users are assigned to tasks. The distinction between Effort and Duration is critical when it comes to completing a project on plan. Duration is how long the task will take to complete, and Effort is the amount of work (resource time) that is needed to complete the task. The Resource Management book separates the building of the resource team from the assignment of those resources to tasks. This is ONLY to make the processes easier to understand. It is not imposed by Planner.

**Bookable Resources** — the Power App Project provides the capability to identify an organization's Bookable Resource, these are the Microsoft 365 users who are going to be assigned as resource to project tasks. The app allows additional data to be associated with the Microsoft 365 users, most importantly their Work Hours Template (WHT) / calendar. In addition, the app's Bookable Resources functionality can be used to identify and manage an organization's accounts and contacts that will be involved in their project(s).  

Again, this book is divided between identification of people / resources and assigning people / resources to tasks to make it easier to understand the full abilities of Planner together with Power App Project's Bookable Resources. As readers gain experience, they will quickly develop their own best practices for adding resources to their project plans.

*Note about Universal Resource Scheduling (URS):* The Power App contains an app called Universal Resource Scheduling (URS); this is a very powerful app for organizations that require more precise / controlled resource management. The app requires the definition of detailed Resource Requirements, followed by finding a Bookable Resource (person) and scheduling them using a Booking Requirement. To perform URS properly requires a significant amount of work by the project managers and functional managers and is generally not recommended for the type of projects created using Planner. For this reason, the author's elected to NOT include it in this book.
`,
    image: "../images/book3.png",
    accentColor: "bg-blue-500"
  },
  {
    id: "4",
    title: "Book 4: Premium Plans Publish & Update",
    content: `
This book recognizes that there are several Planner capabilities that people other than the project team may need to know what work is included in the Premium plan as well as who is going to do this work.  One specific example is Project Baseline. A Baseline allows a comparison of the original plan vs the current reality. Planner provides task level baseline comparison as described in this Book. This Book also covers the Topic of Portfolio Management — the management of a collection of related project plans. In addition to the project plan, many project teams need to manage the documents related to the project, Planner provides a complete Document Management functionality as defined in this book. Finally, the topic of Integrating Planner with Teams is covered. This includes running Planner inside of Teams and / or creating a Channel and adding one or more Planner Plans. All options are covered in this Topic.

**Key Functionalities:**
1. Plan Updates: Planner allows the Premium plan to be updated to reflect the plan's progress, this is fully explained in this Book.
2. Data Visualization: It also covers the material related to built-In Charts and information on Exporting Data to Excel for additional processing.
3. Sharing Options: Includes methods for sharing information with other people who may not have Microsoft Planner / Project subscriptions. 
4. Plan Conversion: In some circumstances an existing Basic Plan should be converted to a Premium Plan. This saves the project manager / team time and effort in starting a new plan from scratch. Planner fully supports the converting in place of a Basic Plan to a Premium Plan, and most importantly keeps a copy of the Basic Plan. The project manager / team can, if circumstances warrant, downgrade the Premium Plan to the Basic Plan that was converted to become the Premium Plan. Planner automatically keeps a copy of the Premium Plan that was downgraded and is shared ONLY with the person who performed the downgrade. All are fully covered in this Book.
`,
    image: "../images/book4.png",
    accentColor: "bg-purple-500"
  }
];

const Home: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatContent = (text: string) => {
    return text.split('\n\n').filter(para => para.trim()).map((para, idx) => {
      if (para.startsWith('**') && para.includes('**')) {
        const headerMatch = para.match(/\*\*(.*?)\*\*/);
        if (headerMatch) {
          const header = headerMatch[1];
          const content = para.replace(headerMatch[0], '').trim();
          return (
            <div key={idx} className="mb-4">
              <h4 className="font-bold text-xl text-gray-800 mb-2 border-b border-gray-200 pb-1">
                {header}
              </h4>
              {content && <p className="text-gray-700 ml-4">{content}</p>}
            </div>
          );
        }
      } else if (para.match(/^\d+\./)) {
        return (
          <ol key={idx} className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
            {para.split('\n').filter(item => item.trim()).map((item, i) => (
              <li key={i} className="pl-2">{item.replace(/^\d+\./, '').trim()}</li>
            ))}
          </ol>
        );
      } else if (para.startsWith('-')) {
        return (
          <ul key={idx} className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            {para.split('\n').filter(item => item.trim()).map((item, i) => (
              <li key={i} className="pl-2">{item.replace(/^-/, '').trim()}</li>
            ))}
          </ul>
        );
      } else if (para.startsWith('*') && !para.startsWith('**')) {
        return (
          <div key={idx} className="mb-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="italic text-gray-600">
              {para.replace(/^\*/, '').trim()}
            </p>
          </div>
        );
      } else {
        return (
          <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
            {para}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#0078D4] to-[#004E8C] text-white shadow-lg relative overflow-hidden">
        <Hero />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mt-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 drop-shadow-lg">
              Microsoft Planner Series For Project Management
            </h1>
            <p className="text-xl md:text-2xl mt-6 text-blue-100 leading-relaxed">
              Comprehensive guides for project management with Microsoft Planner, Premium, and Basic Plans
            </p>
            <div className="mt-8 h-1 w-24 bg-yellow-400 mx-auto rounded-full shadow"></div>
          </div>
        </div>
      </section>

      {/* Book Cards */}
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Header */}
              <div className={`p-6 flex justify-between items-center text-white ${book.accentColor}`}>
                <h3 className="text-2xl font-bold tracking-wide">{book.title}</h3>
                <button
                  onClick={() => toggleSection(book.id)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                  aria-label={expandedSections[book.id] ? "Collapse section" : "Expand section"}
                >
                  {expandedSections[book.id] ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="lg:flex transition-all duration-500 ease-in-out">
                {/* Image */}
                <div className="lg:w-1/3 p-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="relative w-full h-64 lg:h-80 group">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="absolute inset-0 w-full h-full object-contain rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="lg:w-2/3 p-6 lg:p-8">
                  <div
                    className={`prose max-w-none text-gray-700 overflow-hidden transition-all duration-500`}
                    style={{
                      maxHeight: expandedSections[book.id] ? '100%' : '400px',
                    }}
                  >
                    {formatContent(book.content)}
                  </div>

                  {/* Read More/Less Button */}
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => toggleSection(book.id)}
                      className="flex items-center gap-2 text-[#0078D4] font-semibold hover:text-[#005A9E] group px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      {expandedSections[book.id] ? 'Show Less' : 'Read More'}
                      {expandedSections[book.id] ? (
                        <ChevronUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
                      ) : (
                        <ChevronDown size={18} className="transition-transform group-hover:translate-y-0.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Microsoft Planner Series. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Comprehensive guides for project management professionals.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
