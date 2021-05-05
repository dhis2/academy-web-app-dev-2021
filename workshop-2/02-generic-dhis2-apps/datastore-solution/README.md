# Task Instructions 

**IMPORTANT**: Fork [this codesandbox](https://githubbox.com/dhis2/academy-web-app-dev-2021/tree/main/workshop-2/02-generic-dhis2-apps/datastore)

Once you get to the sign in page, you will need to enter the following:

```
server: https://academy.demos.dhis2.org/web-app
username: admin
password: district
```

## If you're having issues connecting to the server

Please check [this link](https://github.com/dhis2/academy-web-app-dev-2021/blob/main/resources/DEBUG.md#if-youre-using-chrome) for troubleshooting tips. 

## If you're having issues with CodeSandbox: 

- Please [Restart Sandbox](https://github.com/dhis2/academy-web-app-dev-2021/blob/main/resources/CODESANDBOX.md) using the toolbar on the left, or restart the server 
- Refresh the browser in the Sandbox
- Make sure to save the code (with `CTRL + S` or `CMD + S`)
- Refresh your browser 

## Reference

- Check the [slides](https://drive.google.com/file/d/1LgLE2uEWeKGp8ik3aeV1gMbLvqqQSxxu/view?usp=sharing) for code examples for these 4 tasks
- DataStore [API documentation]()
- App Service Datastore [documentation](https://github.com/dhis2/app-service-datastore) 

## TASK 1 - Initialize the DataStoreProvider

- In this task you will import a DataStoreProvider and render it as a wrapper around the application contents
- Specify the namespace "my-custom-app-namespace-1234"
- Check comments `@TODO-1`
- You will be working in the `src/App.js` component 

## TASK 2 - Render a list of saved visualization objects 

- Check the comments in the `src/VisualizationList.js` component starting with `@TODO-2`
- In this task you will use the `useSavedObjectList` hook to show a list of saved objects in your userDataStore namespace

## TASK 3 - Support adding new visualizations

- Here you will be working in the `src/VisualizationList.js` and `src/AddControl.js` components 
- Check for comments starting with `@TODO-3`
- The goal of this task is to make the Add button work

## TASK 4 - Support deleting visualizations

- Here you will be working in the `src/RemoveButton.js` component
- Check for comments starting with `@TODO-4`
- The goal of this task is to make the Remove buttons work




