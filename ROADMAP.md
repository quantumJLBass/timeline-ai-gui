# Project Roadmap for "Timeline" Application

## Task List:

- [X] Task Set 1: Initialize Project
  - [X] Set up the Electron app framework with React and Redux integration.
  - [X] Create a 'Hello World' page as an initial test.
  - [X] Set up the project structure with the following folders:
    - [X] `src` for source code
    - [X] `public` for static files
    - [X] `assets` for assets (nested in `public` as `public/assets`)
    - [X] `build` for compiled files
    - [X] `dist` for distribution files
    - [X] `test` for testing files
    - [X] `docs` for documentation files
    - [X] `resources` for resource files (nested in `src` as `src/resources`)
    - [X] `scripts` for scripts (nested in `public` as `public/scripts`)
    - [X] `node_modules` for dependencies
  - [X] Review the tasks in this task set and make sure that they are correctly completed.


- [ ] Task Set 2: Develop the application shell
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Create main menu with navigation to different views (settings, timeline, input, etc.).
  - [ ] Add blank views for settings, timeline, input, entry and assest CRUD operations, entry details, and scalable timeline view.
  - [ ] change the icon of the application which will be asked that the user will provide once asked.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 3: Implement local SQLite database schema.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Define timeline (event/happening) entry properties (e.g., id, title, date, locations, start time, is a parent of other entries, has partent of other entries, description, participants, categories, relations, assets, etc.).
    - [ ] Ensure the complete list of properties is defined.
  - [ ] Add tables and associations for categories, relations, edits, assets, and authorship.
  - [ ] Implement soft deletion for entries and assets.
    - [ ] One type of deletion should unlinking the entry to the asset or other entry.
  - [ ] Set up tables for entries, categories, and relations.
  - [ ] timeline entries should be able to have multiple categories.
  - [ ] timeline entries should be able to have multiple relations to other entries.
  - [ ] assests should be able to have multiple relations to other entries.
  - [ ] there should be a table for the users of the app for later use.
  - [ ] there should be a table for the user_roles of the app of the app for later use.
  - [ ] there should be a table for the edits of the entries.
  - [ ] there should be a table for the authorship of the entries.
  - [ ] there should be a table for the assets of the entries.
  - [ ] there should be a table for the categories of the entries.
  - [ ] there should be a table for the relations of the entries.
  - [ ] the log should be able to be exported.
  - [ ] the log of edits should be able to be viewed
  - [ ] from the log of edits should be able to undo or redo a choosen step; eg: should be able to be reverted or reapplyed.
    - [ ] reverting to a step will undo all the steps after it.
    - [ ] reapply a step will not undo anything but will redo the step only.
  - [ ] Establish relationships between tables with foreign keys.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 4: Add updating and deleting functionality.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Create database methods for updating entry properties.
  - [ ] Implement database methods for auditable removal from the display of entries.
  - [ ] Implement soft delete functionality: instead of removing entries, flag them as deleted.
  - [ ] Develop mechanism for archiving deleted items.
    - [ ] files should be archived in a separate folder that is zipped up with a limit of each storage folder to 1GB.
    - [ ] DB entries should be archived in a separate table.
    - [ ] The archived entries should be able to be restored.
  - [ ] Add transactional integrity for update and delete operations.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 5: Create input view for adding timeline entries.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Design input forms with fields for title, date, description, and categories.
  - [ ] Implement front-end validation for form data.
  - [ ] Develop a confirmation dialogue for input submission.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 6: Create CRUD views all the different properties in the app.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Create CRUD views for categories, relations, edits, assets, and linking.
  - [ ] Ensure that the CRUD views are not applied to the auditing logs, that only viewing of the logs are there.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 7: Implement scalable timeline view.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Design timeline scaling logic for zooming in and out.
  - [ ] Implement pan functionality to move along the timeline.
  - [ ] Create dynamic loading of timeline entries based on scale.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 8: Create details view for timeline entries.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Display detailed information for each entry on a separate view.
  - [ ] Allow navigation to related entries through hyperlinks.
  - [ ] Visualize connections between entries graphically.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 9: Enable export functionality.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Decide on export formats (PDF, JSON, CSV).
  - [ ] Design document templates for each export format.
  - [ ] Implement exporting mechanism for desired format selection.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 10: Implement installation and uninstallation on Windows 11.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Script electron-packager to bundle the application.
  - [ ] Design installer UI with Inno Setup scripts.
  - [ ] Test installation and uninstallation processes.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

- [ ] Task Set 11: Implement basic security measures.
  - [ ] Review and update the list of all tasks as the start of this set of tasks.
  - [ ] Reveiw the [Electron Security Checklist](https://www.electronjs.org/docs/tutorial/security#checklist-security-recommendations).
  - [ ] Research encryption methods suitable for local database.
  - [ ] Encrypt sensitive data before storing in the database.
  - [ ] Ensure data remains encrypted during CRUD operations.
  - [ ] Reveiw the tasks in this task set and make sure that they are correctly completed.

## Progress:
- Current completion estimation: 3%
