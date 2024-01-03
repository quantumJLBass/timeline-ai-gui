# Project Roadmap for "Timeline" Application

## Task List:

- [X] Task 1: Initialize Project
  - [X] Set up the Electron app framework with React and Redux integration. (Programmatic Goal: The app launches with the Electron framework displaying React component.)
  - [X] Create a 'Hello World' page as an initial test. (User-Review Goal: A page displaying 'Hello World' is visible upon app launch.)

- [ ] Task 2: Develop the application shell
  - [ ] Create main menu with navigation to different views (settings, timeline, input, etc.). (Programmatic Goal: Main menu is dynamically created based on available views and allows user to navigate between different parts of the application.)
    // INPUT_REQUIRED {Specify which React component library or custom components to use for main menu creation.}
  - [ ] Add blank views for settings, timeline, input, CRUD operations, and scalable timeline view. (Programmatic Goal: Routing is set up to allow navigation between views. Placeholder components are in place for future development.)
    // INPUT_REQUIRED {Specify routing library such as React Router and add placeholders for each view component.}

- [ ] Task 3: Implement local SQLite database schema.
  - [ ] Design and create database schema for storing timeline entries with fields such as `id`, `date`, `title`, `description`, `media links`, `link to other entries`. (Programmatic Goal: The schema supports the insertion and querying of entries.)
    // INPUT_REQUIRED {Define the SQLite database schema and implement initialization scripts.}

- [ ] Task 4: Add updating and deleting functionality.
  - [ ] Implement API in the SQLite database to update and delete entries. (Programmatic Goal: CRUD operations are successfully executed against the database via defined interfaces.)
    // INPUT_REQUIRED {Define API endpoints and corresponding SQL operations for update and delete.}

- [ ] Task 5: Create input view for adding timeline entries.
  - [ ] Include form validation and appropriate UI components for data entry including date pickers, file uploaders, etc. (Programmatic Goal: The form collects user input, validates it, and is ready to submit it to the database.)
    // INPUT_REQUIRED {Define form structure, validation criteria, and UI component library(for example date-picker) to use.}

- [ ] Task 6: Implement scalable timeline view.
  - [ ] Develop zoom and pan capabilities on the timeline view. (Programmatic Goal: Users can navigate the timeline's temporal scale with intuitive controls.)
    // INPUT_REQUIRED {Research and choose a library/tool for implementing zoom and pan features.}

- [ ] Task 7: Create details view for timeline entries.
  - [ ] Implement hyperlinking between related entries with a visual representation on the connections. (Programmatic Goal: The user can see the interconnections between events on the timeline and navigate through them.)
    // INPUT_REQUIRED {Decide on a visualization library and define how hyperlinks will be visualized.}

- [ ] Task 9: Enable export functionality.
  - [ ] Determine how to layout exported data and design a template for each format. (Programmatic Goal: Templates for PDF, image files, and CSV define how to present the timeline data.)
    // INPUT_REQUIRED {Choose layout template engines or formats and specify the design for each export format.}

- [ ] Task 10: Implement installation and uninstallation on Windows 11.
  - [ ] Configure electron-packager and Inno Setup to create an installer that includes dependencies and sets up the software. (Programmatic Goal: Provide a seamless installation experience that abstracts away dependency setup and configuration.)
    // INPUT_REQUIRED {Detail required steps for the configuration of electron-packager and Inno Setup script.}

- [ ] Task 11: Implement basic security measures.
  - [ ] Plan and implement a data storage and encryption strategy for protecting user-generated content. (Programmatic Goal: Sensitive data is encrypted at rest using industry-standard algorithms.)
    // INPUT_REQUIRED {Define the strategy and libraries to be used for data encryption.}

