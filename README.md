# CalmTrack

#### Video Demo: https://youtu.be/VOKkVvVubJk

#### Description:

CalmTrack is a Chrome extension designed to help students manage their productivity and mental wellness while studying. The extension allows users to log their daily stress levels, study hours, moods, and tasks in a simple and visually appealing interface.

The motivation behind this project came from the challenges students face while balancing productivity and mental health. Many students experience stress, burnout, and difficulty staying organized during exams and study sessions. CalmTrack was created as a lightweight and accessible tool that combines productivity tracking with emotional wellness tracking.

The extension was developed using HTML, CSS, and JavaScript as the primary technologies. Chrome Extension APIs and Chrome local storage were also used to save user data persistently.

The main features of CalmTrack include:

1.Stress level tracking
2.Mood logging
3.Study hour tracking
4.Daily task planner
5.Task completion checkboxes
6.Productivity analytics
7.Study streak system
8.Dark mode support
9.Persistent data storage

The extension popup serves as the main user interface. Users can input their stress level, study hours, and mood, then save entries directly into Chrome local storage. JavaScript functions are used to retrieve and display saved entries dynamically.

One of the most important parts of the project was implementing analytics calculations. The extension calculates average stress levels, total study hours, and total entries using loops, arrays, and numerical processing in JavaScript.

Another important design decision was changing the task system from simple strings into JavaScript objects. This allowed tasks to support completion states with interactive checkboxes. Each task stores both its text and whether it has been completed.

The study streak feature was implemented using JavaScript Sets in order to count unique dates from saved entries. This creates a motivational system that encourages consistent study habits.

The dark mode system was implemented using CSS class toggling and Chrome local storage. User preferences are stored persistently so that the selected theme remains active even after reopening the extension.

Several files were created during development:

-manifest.json  
  Configures the Chrome extension and permissions.

-popup.html  
  Contains the extension layout and structure.

-popup.css  
  Handles all styling, themes, and visual design.

-popup.js  
  Contains the application logic, data storage, rendering, analytics calculations, streak system, dark mode functionality, and task management.

Throughout development, several design choices were considered. Initially, the project only stored a single entry, but this was later redesigned into an array-based system to support analytics and historical tracking. The task system was also redesigned to support task completion checkboxes.

One challenge during development was organizing JavaScript logic as the project became larger. As more features were added, functions were separated based on responsibilities such as displaying entries, displaying tasks, analytics calculations, and event handling.

Overall, CalmTrack demonstrates frontend development, browser extension architecture, data persistence, user interaction, and computational problem-solving concepts taught throughout CS50.

During development, I learned a lot about organizing JavaScript code as project become larger. At the beginning, the project only displayed a simple form, but as more features were added, the logic became more complex. This helped me better understand functions, arrays, objects, loops, local storage, and DOM manipulation in a practical way.

One reason I chose to create a Chrome extension instead of a web application was because I wanted the project to feel lightweight and easily accessible for students during study sessions. Since browser extensions can be opened quickly while studying online, I felt that this format matched the purpose of the project well. I also wanted to challenge myself by learning how Chrome extensions work, since this was something completely new to me before starting the project.

CWhile creating CalmTrack, I learned how browser extensions work and how JavaScript can be used to create interactive applications. I also learned how to organize larger JavaScript files as more features were added. This project helped me better understand arrays, objects, loops, local storage, event listeners, and DOM manipulation in a practical way instead of only through small exercises.