
- Future features to keep in mind are:
    1. an AI/LLM for curation
    2. API end points for an Obsidian plugin
    3. security features.
- Sections of the app to start with should include:
    1. settings area
    2. Scalable interactive timeline
    3. Detailed view of a user-selected event from the timeline
    4. CRUD for events
    5. listings for all CRUD items.
- The inter/cross-linking of event entries with deletion should optionally delete child events but give the editor the chance to choose not to delete the child events and/or assets.
- Assets can be any type of file and can be linked to many events.
- Events may have many assets.
- Events can have a parent or child event, i.e., or a sub-event.
- Everything entered in the app should be tracked.
- Authorship, editors, and edits should be tracked and should be viewable but not editable.
    1. Implement an event-driven approach for database operations, enabling the replay, undo, or rollback of edits.
    2. Utilize soft deletion for all CRUD operations, ensuring data is never permanently erased in initial deletion actions.
    3. Store "deleted" items in a trash bin, which can later be emptied to execute a soft delete.
    4. Maintain auditability even after emptying the trash, by using a deletion flag in the database to mark items as deleted without erasing them, thus keeping them invisible to users.
    5. Apply the same deletion flag mechanism for both assets/files and database entries.
    6. Archive deleted database entries and assets in a separate storage, akin to compressed storage bins, to maintain historical records.