# Advanced Application Runtime and Data Queries

Some handy links:

- [Presentation slides](https://drive.google.com/file/d/1LgLE2uEWeKGp8ik3aeV1gMbLvqqQSxxu/view?usp=sharing) with **code examples**
- [REST API Documentation](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html)
- [App Runtime Docs](https://runtime.dhis2.nu)
- [Data Query Playground](https://runtime.dhis2.nu/playground)
- [App Runtime Example App](https://github.com/dhis2/app-runtime/tree/master/examples/cra)

## Tasks intructions 

1. Please go to the [CodeSandox link](https://codesandbox.io/s/elated-sun-vcnk9?file=/README.md)
2. Once you've opened the CodeSandbox link, please remember to **fork the project** before you can edit it.
3. Once you get to the sign in page, you will need to enter the following:

```
server: https://academy.demos.dhis2.org/web-app/
username: admin
password: district
```
5. There are three simple tasks to be completed. The comments that are important are the ones containing `@TODO` in `src/ProgramsList.js` and `src/DeleteProgram.js` 
6. After you've completed these tasks you can share the link to your solution in the `#academy-2021-web` channel on Slack or send a DM directly to one of the facilitators if you want feedback

### TASK 1 - Using Dynamic queries and variables 

In this task you will convert a static query into a dynamic one. You will be working in the `src/ProgramsList.js` component (check first comments `@TODO-1`)

### TASK 2 - Using `Alerts` 

Check the comments in the `src/ProgramList.js` component starting with `@TODO-3`. 

In this task you will use a simple `useAlert` to show alerts when a program has been created 

### TASK 3 - Define a dynamic delete mutation  

Here you will be working mostly in the `src/DeleteProgram.js` component. Check for comments starting with `@TODO-2`. The goal of this task is to make the Delete button work. 

You will implement a delete mutation using dynamic query techniques. 




