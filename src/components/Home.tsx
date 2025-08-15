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
    id: 'book1',
    title: 'Book 1: Premium Plans Initiation',
    content: `There are several methods that can be used to initiate the development of a new Premium Plan. From the Microsoft 365 Waffle select the appropriate icon. 
    
Note: Each user's 365 Waffle is specific to their environment and may have more or less icons than shown below.

Figure 2 - Microsoft 365 Waffle Icons / Options

Specifically:
Select the Planner icon / option — see highlight 1. This gives you access to all authorized existing Basic Plans, Premium Plans, and Portfolios, as well as the ability to create either new Premium or Basic Plans and portfolios.

Select the Microsoft 365 Project icon / option — see highlight 2 in the above figure. This option opens the Project Home where you can generate a new blank Premium Plan. You can also use a predefined template to generate a Premium Plan. This option offers the functionality to import basic data from schedules created using Microsoft Project Desktop files. For users who have access to Project Online, they can open a schedule in the Project Desktop software and Save As a file and then use the saved file to import and create a Premium Plan. 

Select the second Microsoft 365 Project icon / option — see highlight 3 in the above figure. This option opens Power App Project giving you access to all the existing Premium Plans in your Planner Instance, as well as the ability Cato create new Premium Plans. Can also use this option to copy existing Premium Plans as the starting point for new Premium Plans. Can also Deactivate an existing plan — the plan existing but access to it is restricted. And Activate previously Deactivated plans.

This book also includes complete details on the use of Microsoft Copilot to initiate the creation of new Premium Plans.`,
    image: '/images/book1.png',
    accentColor: 'bg-blue-600'
  },
  {
    id: 'book2',
    title: 'Book 2: Premium Plans Goals and Tasks',
    content: `Planner has the capability for the project team to define the plan's goals. Project goals are a high-level or overarching vision for the project. They should focus on what will happen when the project is successful. Goals are usually long-term and achievable and should be based on facts and figures. Planner supports the capability to identify a limited set of project goals.  Planner supports two different methodologies for organizing and visualizing tasks / activities in Premium Plans — Work Breakdown Structure (WBS) or Kanban Boards. Both are supported by Planner and in both approaches the project's goals / objectives can be linked to tasks in the plan. 

• Define / Refine the Tasks Durations — elsewhere Microsoft has defined Duration as "the total span of active working time for a task." Tasks have Duration, project managers / teams using Planner are responsible for assigning a Duration to the detail tasks in their plans. 

• Set / Revise Task Dependencies & Deadlines — task dependencies provide a way to schedule tasks based on their relationships to other tasks independent of actual dates. That way, if a task's scheduling dates change, tasks dependent on that task will also be rescheduled automatically. A task's deadline does not generally affect task scheduling. They are used to indicate a target date the project manager / team does not want to miss. A task with a Deadline is scheduled just like any other task, but when a task finishes after its Deadline, Planner displays a task indicator notifying the project team that the task is missing its Deadline. 

• Reviewing / Understanding Changes in the Plan — Planner offers the capability for authorized users to view the history of any task in a Premium plan. This feature / functionality is ONLY provided to authorized users who have a PP3 or PP5 subscription. See below for more details on the Subscriptions.`,
    image: '/images/book2.png',
    accentColor: 'bg-emerald-600'
  },
  {
    id: 'book3',
    title: 'Book 3: Resource Management',
    content: `Until people / resources are assigned to tasks, no Work / Effort is associated with tasks in Planner so only task Duration can be displayed if it has been set by the project manager / team. Planner calculates the Effort for a task when Microsoft 365 users are assigned to tasks. The distinction between Effort and Duration is critical when it comes to completing a project on schedule. Duration is how long the task will take to complete, and Effort is the amount of work that is needed to complete the task. The Resource Management book separates the building of the resource team from the assignment of those resources to tasks. This is ONLY to make the processes easier to understand. It is not imposed by Planner.

Bookable Resources — the Power App Project provides the capability to identify an organization's Bookable Resource, these are Microsoft 365 users who are going to be assigned as resource on project tasks. The App allows additional data to be associated with the Microsoft 365 users, most importantly their Work Hours Template (WHT) / calendar. In addition, the App's Bookable Resources functionality can be used to identify and manage an organization's accounts and contacts that will be involved in their project(s).  

Again, this book is divided between identification of people / resources and assigning people / resources to tasks to make it easier to understand the full abilities of Planner together with Power App's Bookable Resources.

Power App Project contains an app called Universal Resource Scheduling; this is a very powerful app for organizations that require more precise / controlled resource management. The app requires the definition of detailed Resource Requirements, followed by finding a Bookable Resource (person) and scheduling them using a Booking Requirement. The book explains this functionality.`,
    image: '/images/book3.png',
    accentColor: 'bg-purple-600'
  },
  {
    id: 'book4',
    title: 'Book 4: Publish and Update Premium Plan',
    content: `There are a number of Planner capabilities that recognize that people other than the project team may need to know what is in the Premium plan as well as who is going to do the work.  It also included the functionality to set a Baseline for the plan. When the Baseline is generated, Planner will report on the variance between the plan's current value and the Baseline value. This Book also covers three related Topics Portfolio Management, Integrate With Teams and Document Management..

Planner allows the Premium plan to be updated to reflect the plan's progress, this is fully explained in this book. This book also covers the material related to built-In Charts and information on Exporting Data to Excel for additional processing, as well as sharing information with other people who may not have Microsoft Planner / Project subscriptions.`,
    image: '/images/book4.png',
    accentColor: 'bg-amber-600'
  },
  {
    id: 'book5',
    title: 'Book 5: Basic Plans',
    content: `This book covers both the initiation, building and updating of Planner Basic Plans.  The recommended option to create a Basic Plan is to use Microsoft 365 Planner icon / option — see the previous Figure. Some of the Planner Templates can be used to generate a new Basic Plan — some of the templates will ONLY generate a Basic Plan.

Indirectly related to the initiation of a new Basic Plan is the capability to easily convert it to a Premium Plan. This allows users to start with a Basic Plan and if during the building of the plan it becomes apparent that a Premium Plan would be a better answer to quickly and easily convert to a Premium Plan.  

In some circumstances an existing Premium Plan should be downgraded to a Basic Plan. This saves the user time in starting a new plan. Planner supports the downgrading of a Premium Plan to a Basic Plan, and most importantly does not alter / change the Premium Plan.

This book covers the Planner functionality that explains how to create tasks in Basic Plans as well as updating Basic Plans to reflect Progress.

It also covers Planner's My Day and My Tasks functionality. For both these abilities Planner provide both a Grid and Board view of the data.`,
    image: '/images/book5.png',
    accentColor: 'bg-pink-600'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#0078D4] to-[#004E8C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <h1 className="text-4xl font-bold mt-10">Microsoft Planner Book Series</h1>
          <p className="text-lg mt-4 max-w-3xl">Comprehensive guides for project management with Microsoft Planner, Premium, and Basic Plans</p>
        </div>
      </section>

      {/* Book Cards */}
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 transition hover:shadow-2xl">
              {/* Header */}
              <div className={`p-6 ${book.accentColor} text-white`}>
                <h3 className="text-2xl font-bold">{book.title}</h3>
              </div>

              {/* Content */}
              <div className="lg:flex">
                {/* Image */}
                <div className="lg:w-1/3 p-6 flex items-center justify-center bg-gradient-to-tr from-gray-50 to-blue-100">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-64 object-contain rounded-xl shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="lg:w-2/3 p-8">
                  <div className="text-gray-700 space-y-4">
                    {book.content.split('\n\n').slice(0, 2).map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => toggleSection(book.id)}
                      className="flex items-center gap-2 text-[#0078D4] font-semibold hover:text-[#005A9E]"
                    >
                      {expandedSections[book.id] ? 'Show Less' : 'Read More'}
                      {expandedSections[book.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  {expandedSections[book.id] && (
                    <div className="mt-6 bg-gray-50 border border-gray-200 p-4 rounded-xl text-gray-700">
                      {book.content.split('\n\n').map((para, idx) => (
                        <p key={idx} className="mb-3">{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;