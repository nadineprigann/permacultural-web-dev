# Introduction

Based on the nNput-Output-Analysis of the 6 eleemnts chosen, the main objectives evaluated were clear and simple communication for every member of the process. This meant to find an inclusive tool that would enable everyone to check the progress of the project, regardless of their role. Practically and ideally, this had to be a tool you could use without creating an account or download an app. Additionally, the tool had to respect your privacy and might as well work offline.  as my personal policy (link her eto tools and the policy behind it).

To fulfill this goal, an accessibly tracked workflow could do just that:

- it tracks the current state we're in -> also the workflow which helps in terms of project management
- it visualizes in a simple manner which tasks are up next
- members of the workflow can be notified when they should act
- due dates are visible to everyone
- a central place for notes and how to go about a task
-> everyone is on the same page

As a tool, I chose [Trello](https://trello.com/). It's a very extensive tool to help project planning. There is a free version which enables me to create several workspaces (= projects) with different (max. 10) boards (= detailed workflows, spearately shown). Within these boards, I'm using a kanban workflow with the lists Backlog, In Progress, Review, Reviewed and Done. My cards are broken down tasks of the whole workflow. For instance within the workflow Frontend, I have a task called Structural analysis, which means to analyze the design and define the modular code components needed to build the layout. This task description can be outlined in detail on the card itself. Additionally, due dates, custom buttons, labels, etc. can be added. Noteworthy is the feature, to not only use colors for the labels but totoggle abutton to activate a pattern for each color to aid people with color impairments. Due to several add-ons, I can also link GitHub events to the cards such as a pull request, an issue, etc. More importantly, I'm able to create complex automation rules that help speed up the workflow and simplify communication between the members of the project, for example this one: when a card containing "final frontent evalution" is moved to done, create a card with the title "launching" in the list backlog on the board backend, assign me to the card and set the the due date to tomorrow."

All of these functions and rules wil be initiated in on "emplate workspace" as the source of truth. This is where I will make optimizations to use in the next project. For a new project, I just copy the boards and all cards come with it. I'm ready to go with a fresh copy of the workflow.

In terms of accessibility, I can inivte people without a trello account to view the board, if it's public. Changes can only be made once you are logged in. This is a downside but also protects the workspace from unauthorized access. The login can be made via a created trello account but aslo via Apple ID, Slack or Microsoft, though. Normally, you have at least one of these accounts and can thus login without creating a new account. Trello also has an app for desktop and phone to work offline and sync when network connection is available.

The current problem is that I only copy the boards for each new project. THus, I lose all automated rules for these cards in the newly created copy and updates to the "master" workflow are not synced. At the time of writing, there is no option marking a workspace as a template to create new ones from in the free plan.
Why not other apps?

GitHub:
I wanted to use GH firstlybecause it is already in use for version control of the code. There is also an option to create workflows, called projects. Unfortunately, there is no way to create a "master workflow" and use a dedicated copy for every project. Once I change the project's worklfow, the master also changes. Additionally, the automation rules are not super detailed (although you could probably use the "workflow" section under settings to create them). And, more importantly, the user experience is a bit mor etendiuos because it is necessary to create the cards as issues to be able to add labels etc. Plus, coming back to permaculture, it is sometimes better to have separate tools on different plattforms to make the workflow more resilient, especially for these two important parts: code management + project management. When one server is out of order for some time, I can still work offline with this setup, since I can code without internet and update my workflow via the Trello app. The code is backed up 3 times, so losing it is not very likely. I still need to figure out how I can backup the workflow and all the privacy options (encryption, etc) as well.

Das Ergebnis dieser Fragen ist dieser[Workflow](https://trello.com/w/userworkspaceaa1c57b2e62ef5488e9680dea9d99fce), der gleichzeitig als Project Management Prozess verstanden und benutzt werden kann.
