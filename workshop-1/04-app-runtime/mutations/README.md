## Workshop 1 - App Runtime Task 2

### Fill in mutations

This application uses mutations in 2 React components:
- [DeleteVisualizationButton](./src/components/DeleteVisualizationButton.js)
- [NewVisualizationButton](./src/components/NewVisualizationButton.js)

The application is almost complete, all you need to do is fill in the mutations in those two files.  You can use the [Data Query Playground](https://runtime.dhis2.nu/playground) to test different mutations.

## OPTIONAL BONUS

If you've completed everything and want a challenge, you can **add a new feature to this application**.  This is **completely optional**, so don't worry about it if you haven't completed all the other tasks yet.

### The Bonus Feature

This application supports **creating** and **deleting** visualizations, but it doesn't support **renaming** them.  This is your task:

Add an `Rename` button to each row in `VisualizationsTable.js`.  This Edit button should open a `Dialog` component (from `@dhis2/ui`) which contains a form.  That form should allow the user to type a new name for the selected Visualization.  When submitted, the form should use a Data Mutation to send a POST request updating the visualization's name.  The dialog should then disappear and the table of visualizations should refresh to show the updated name.  Good luck!
