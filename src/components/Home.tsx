import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Slideshow from './Slideshow';

const Home: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const books = [
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

This book also includes complete details on the use of Microsoft Copilot to initiate the creation of new Premium Plans.`
    },
    {
      id: 'book2',
      title: 'Book 2: Premium Plans Goals and Tasks',
      content: `Planner has the capability for the project team to define the plan's goals. Project goals are a high-level or overarching vision for the project. They should focus on what will happen when the project is successful. Goals are usually long-term and achievable and should be based on facts and figures. Planner supports the capability to identify a limited set of project goals.  Planner supports two different methodologies for organizing and visualizing tasks / activities in Premium Plans — Work Breakdown Structure (WBS) or Kanban Boards. Both are supported by Planner and in both approaches the project's goals / objectives can be linked to tasks in the plan. 

Define / Refine the Tasks Durations — elsewhere Microsoft has defined Duration as "the total span of active working time for a task." Tasks have Duration, project managers / teams using Planner are responsible for assigning a Duration to the detail tasks in their plans. 

Set / Revise Task Dependencies & Deadlines — task dependencies provide a way to schedule tasks based on their relationships to other tasks independent of actual dates. That way, if a task's scheduling dates change, tasks dependent on that task will also be rescheduled automatically. A task's deadline does not generally affect task scheduling. They are used to indicate a target date the project manager / team does not want to miss. A task with a Deadline is scheduled just like any other task, but when a task finishes after its Deadline, Planner displays a task indicator notifying the project team that the task is missing its Deadline. 

Reviewing / Understanding Changes in the Plan — Planner offers the capability for authorized users to view the history of any task in a Premium plan. This feature / functionality is ONLY provided to authorized users who have a PP3 or PP5 subscription. See below for more details on the Subscriptions.`
    },
    {
      id: 'book3',
      title: 'Book 3: Resource Management',
      content: `Until people / resources are assigned to tasks, no Work / Effort is associated with tasks in Planner so only task Duration can be displayed if it has been set by the project manager / team. Planner calculates the Effort for a task when Microsoft 365 users are assigned to tasks. The distinction between Effort and Duration is critical when it comes to completing a project on schedule. Duration is how long the task will take to complete, and Effort is the amount of work that is needed to complete the task. The Resource Management book separates the building of the resource team from the assignment of those resources to tasks. This is ONLY to make the processes easier to understand. It is not imposed by Planner.

Bookable Resources — the Power App Project provides the capability to identify an organization's Bookable Resource, these are Microsoft 365 users who are going to be assigned as resource on project tasks. The App allows additional data to be associated with the Microsoft 365 users, most importantly their Work Hours Template (WHT) / calendar. In addition, the App's Bookable Resources functionality can be used to identify and manage an organization's accounts and contacts that will be involved in their project(s).  

Again, this book is divided between identification of people / resources and assigning people / resources to tasks to make it easier to understand the full abilities of Planner together with Power App's Bookable Resources.

Power App Project contains an app called Universal Resource Scheduling; this is a very powerful app for organizations that require more precise / controlled resource management. The app requires the definition of detailed Resource Requirements, followed by finding a Bookable Resource (person) and scheduling them using a Booking Requirement. The book explains this functionality.`
    },
    {
      id: 'book4',
      title: 'Book 4: Publish and Update Premium Plan',
      content: `There are a number of Planner capabilities that recognize that people other than the project team may need to know what is in the Premium plan as well as who is going to do the work.  It also included the functionality to set a Baseline for the plan. When the Baseline is generated, Planner will report on the variance between the plan's current value and the Baseline value. This Book also covers three related Topics Portfolio Management, Integrate With Teams and Document Management..

Planner allows the Premium plan to be updated to reflect the plan's progress, this is fully explained in this book. This book also covers the material related to built-In Charts and information on Exporting Data to Excel for additional processing, as well as sharing information with other people who may not have Microsoft Planner / Project subscriptions.`
    },
    {
      id: 'book5',
      title: 'Book 5: Basic Plans',
      content: `This book covers both the initiation, building and updating of Planner Basic Plans.  The recommended option to create a Basic Plan is to use Microsoft 365 Planner icon / option — see the previous Figure. Some of the Planner Templates can be used to generate a new Basic Plan — some of the templates will ONLY generate a Basic Plan.

Indirectly related to the initiation of a new Basic Plan is the capability to easily convert it to a Premium Plan. This allows users to start with a Basic Plan and if during the building of the plan it becomes apparent that a Premium Plan would be a better answer to quickly and easily convert to a Premium Plan.  

In some circumstances an existing Premium Plan should be downgraded to a Basic Plan. This saves the user time in starting a new plan. Planner supports the downgrading of a Premium Plan to a Basic Plan, and most importantly does not alter / change the Premium Plan.

This book covers the Planner functionality that explains how to create tasks in Basic Plans as well as updating Basic Plans to reflect Progress.

It also covers Planner's My Day and My Tasks functionality. For both these abilities Planner provide both a Grid and Board view of the data.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slideshow */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Microsoft Planner for <span className="text-[#0078D4]">Project Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide series for modern project management using Microsoft's latest tools
            </p>
          </div>
          
          <Slideshow />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Microsoft Planner for Project Management series was written for people who are responsible for developing and maintaining / managing projects and programs using Microsoft's most recent project management software Planner, combined with Power Apps Project. As described by Microsoft "Planner is an intuitive, collaborative task management tool within the Microsoft 365 suite. It helps teams easily plan, manage, and complete tasks using kanban boards and task cards. Users can assign tasks, set due dates, add labels, and attachments to tasks all within Planner."
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Planner together with Power Apps Project is part of the Microsoft Project product family, which includes Project Desktop Client, and Project for the web (or simply PWA).
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              This Planner book series consists of five (5) functions / features books Together they cover all of the most important aspects of using the Planner App plus Power Apps Project to create, build and manage project plans / schedules — ranging from simple task / activity lists to complex plans that have a large number of tasks / activities (current maximum is 9,000 tasks / activities per Planner Premium plan).
            </p>
          </div>

          {/* About the Authors */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About the Authors</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0078D4] mb-4">James Bulmer</h3>
                <p className="text-gray-700 leading-relaxed">
                  James Bulmer has almost 35 years' experience as a management consultant. As a consultant, I have assisted a wide variety of organizations, ranging from law enforcement to pharmaceuticals to one of the largest gaming organizations in North America. I have participated in the definition, development, and implementation of a wide variety of enterprise-wide project portfolio management solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0078D4] mb-4">Cindy M. Lewis</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cindy M. Lewis has over 25 years of experience in project management, As a passionate consultant and trainer I help individuals and corporations achieve their goals with Microsoft Project, Project Online, and Project for the web (aka the "new" Planner). I am a Microsoft Certified Trainer (MCT) and Most Valuable Professional (MVP) in Project, as well as a respected author, speaker, and facilitator.
                </p>
              </div>
            </div>
          </div>

          {/* Microsoft Project Architecture */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-lg leading-relaxed text-gray-700 mb-6">
              <p className="mb-4">
                This series of books was developed for people who want to use the power of the new Microsoft Planner App for the creation and management of project management plans — plans ranging from a simple list of tasks to comprehensive project plans that have hundreds of tasks and involve numerous people / resources to perform the project-related work. The diagram below is a schematic of the various project offerings available from Microsoft[ This original figure / schematic was developed by the authors based on previously published Microsoft material.]. These books focus on the new Microsoft Planner first released in mid-2024. It is important to note that the Project Desktop client and Project Online cannot interface / share data directly with Microsoft Planner.
              </p>
              
              {/* Figure 1 Placeholder */}
              <div className="my-8 p-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg text-center">
                <div className="text-gray-500">
                  <div className="mb-2">📊</div>
                  <p className="font-semibold">Figure 1 – Microsoft Project Architecture</p>
                  <p className="text-sm mt-2">[Image placeholder - Architecture diagram will be inserted here]</p>
                </div>
              </div>
              
              <p className="mb-4">
                To quote Microsoft "the new Planner App is a comprehensive work management tool that integrates the simplicity of Microsoft To Do, the collaboration features of Microsoft Planner, and the power of Microsoft Project for the web. The new Planner is designed to scale from individual task management to team collaboration and enterprise-level project management, all within a familiar and user-friendly interface."
              </p>
              
              <p className="mb-6">
                Planner exists as a Team's App as well as a standalone app. These books focuses on the standalone version of Planner.The most critical thing to remember is you can integrate Planner with Teams or you can integrate a Planner plan with a Team. Also you can do the integration before any Planner plan is full created — you can simply give the plan a name and integrate the results as the plan is developed or you can do the integration after the Planner plan is created. The author's approach is to do the integration after the plan is developed and before the work of the project commences. This a personal preference, the integration function is the same in both scenarios.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison of Planner Plans</h3>
            <p className="text-gray-700 mb-6">
              Planner supports two different types on plans — Basic and Premium. The following Table is a comparison of the functionality that is supported for Basic Plans Vs Premium Plans. As outlined below Book 5 is focused on Basic Plans and the first four on Premium plans. Having two types of Planner plans allows users to select which type of plan best suits their specific requirements. It is possible to convert a Basic Planner Plan to a Premium [advanced] Planner Plan at any time. The conversion occurs automatically when the user selects the appropriate command option. It is also possible to downgrade a Premium Plan to a Basic Plan.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#0078D4] text-white">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Key Feature</th>
                    <th className="border border-gray-300 p-3 text-center font-semibold">Basic Plans</th>
                    <th className="border border-gray-300 p-3 text-center font-semibold">Premium Plans</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Tasks displayed in Grid view</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Tasks displayed in Board view</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Tasks displayed in Charts view</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Supported date range is 1/1/2000 to 12/31 2149</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">View tasks in Assigned to me view<br/><span className="text-sm text-gray-600">Tasks assigned in Premium Plans will only appear for resources (users) who are members of the Group associated with the plan. There are limited editing capabilities for Premium tasks in the Assigned to me view. Resources (users) will need to open the Premium Plan to edit ALL the relevant fields</span></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Tasks displayed in Timeline (Gantt Chart)</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Tasks displayed in People view<br/><span className="text-sm text-gray-600">Maximum resources / users that can be assigned to a single task is 20.</span></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Tasks displayed in a Schedule view</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Tasks displayed in Outlook Calendar</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Recurring tasks</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Add schedules to Loop</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Tasks can be displayed in Hierarchical format[], including having a Project Defining task<br/><span className="text-sm text-gray-600">The maximum hierarchy level for tasks is 10. Maximum Duration of a Summary Task, including a project Summary Task is 3650 days or 10 years. This is also the maximum Duration of a project plan.</span></td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Filter and Group tasks</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Coloring of tasks based on user defined conditions</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Rich text notes, including emoji</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Define the Plans Goals and associate them with tasks</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Dependencies between tasks, including Lead and Lag time<br/><span className="text-sm text-gray-600">Maximum of 600 links (Successor only) for each Premium Plan. Maximum links (predecessor plus Successor) for a task is 20.</span></td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Identify tasks as milestones</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Task custom fields<br/><span className="text-sm text-gray-600">Maximum of 10 Custom fields per Premium plan</span></td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Highlight the plans Critical Path</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Define and apply custom calendars</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Task History<br/><span className="text-sm text-gray-600">This feature requires the active user to have a Project Plan 3 or 5 subscription — see below for more details on subscriptions.</span></td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Copy schedule[]</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Export schedule to Excel</td>
                    <td className="border border-gray-300 p-3 text-center"></td>
                    <td className="border border-gray-300 p-3 text-center">✓</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Limit on tasks in a schedule</td>
                    <td className="border border-gray-300 p-3 text-center">3000</td>
                    <td className="border border-gray-300 p-3 text-center">9000</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Maximum total resources for a project</td>
                    <td className="border border-gray-300 p-3 text-center">150</td>
                    <td className="border border-gray-300 p-3 text-center">150</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Authors' Recommendations for New Planner Users:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>If the plan is more than just a simple list of tasks, then create a Premium Plan.</li>
                <li>If the plan is going to involve more than two / three people working on the tasks, then create a Premium Plan.</li>
                <li>If the plan is more complex than a simple list of work / tasks, and you require dependencies between some tasks, and you need to group tasks in what many people label as phase, then create a Premium Plan.</li>
                <li>Most importantly if you do not have answers for the above three criteria start with a Basic Plan, you can always switch to a Premium Plan at any time.</li>
                <li>Equally important if you start with one type and discover that you made the wrong decision simply convert from Basic to Premium or downgrade from Premium to Basic. And yes, a downgraded Premium Plan can be converted back to Premium Plan if required.</li>
              </ul>
            </div>
          </div>

          {/* Figure 2 Placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="my-8 p-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg text-center">
              <div className="text-gray-500">
                <div className="mb-2">🧇</div>
                <p className="font-semibold">Figure 2 – Microsoft 365 Waffle Icons</p>
                <p className="text-sm mt-2">[Image placeholder - Microsoft 365 Waffle interface will be inserted here]</p>
              </div>
            </div>
          </div>

          {/* Book Series Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Planner Book Series Content</h2>
            
            {books.map((book) => (
              <div key={book.id} className="border border-gray-200 rounded-lg mb-4">
                <button
                  onClick={() => toggleSection(book.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-[#0078D4]">{book.title}</h3>
                  {expandedSections[book.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                
                {expandedSections[book.id] && (
                  <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                    <div className="prose max-w-none">
                      {book.content.split('\n').map((paragraph, index) => (
                        paragraph.trim() ? (
                          <p key={index} className="text-gray-700 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ) : null
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;