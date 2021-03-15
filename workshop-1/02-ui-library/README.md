# UI Library: Tasks instructions

* [1. Introduction](#intro)
  * [UI Libraries recap](#intro--recap)
  * [Workshop tasks introduction](#intro--workshop-into)
* [2. Training environment](#training-environment)
* [3. Structure inside the `src` folder](#src-structure)
* [4. Task 1 - Create a navigation with the Menu and MenuItem component](#task-1)
  * [Existing code in the template](#task-1--existing-code)
  * [Completing the task](#task-1--completing-the-task)
* [5. Task 2 - Create a Table for the attributes that are being loaded](#task-2)
  * [Existing code in the template](#task-2--existing-code)
  * [Completing the task](#task-2--completing-the-task)
* [6. Task 3 - Complete the registration form](#task-3)
  * [Existing code in the template](#task-3--existing-code)
  * [Completing the task](#task-3--completing-the-task)
    * [The validation](#task-3--validation)
* [7. Solution for all three tasks](#solution)

<a name="intro" href=""></a>
## 1. Introduction

<a name="intro--recap" href=""></a>
### UI Library recap

At DHIS2 we have a design system which is a collection of design principles and
a library of UI components for designing applications for the DHIS2 platform.
Using this system you can design and build applications that are usable,
powerful and consistent with other DHIS2 applications.

The UI library is our implementation of that design system for react
environments. It's used by the DHIS2 core developers as well as by 3rd party
dhis2 apps.

The main library, called `ui`, is the complete library and re-exports all
components from our individual libraries. It's therefore the better choice when
developing apps as it exports the components in a flat structure and works
independent of structural changes in our individual libraries.

#### Installation

It can be added to a project with both npm and yarn:

**npm:**
```bash
npm install @dhis2/ui --save-prod
```

**yarn:**
```bash
yarn add @dhis2/ui
```

#### Documentation

The documentation of the UI library can be found here: [https://ui.dhis2.nu](https://ui.dhis2.nu/#/).

This documentation also features an improved version of [live demos](https://ui.dhis2.nu/demo/) that uses Storybook to showcase components. For each component, you will see a number of demos and its different variations and how they interact with props. Make sure to check them out! 

<a name="intro--workshop-intro" href=""></a>
### Workshop tasks introduction

There are three tasks to be completed. The first one is required for the next
two as it sets up the routing to reach the pages.

All files that contain explanatory comments, even for code
that's irrelevant to the task or hasn't been covered yet during the workshop.

The comments that are important are the ones containing `@TODO`, that's where
action is required by you in order to complete the task.


<a name="training-environment" href=""></a>
## 2. Training environment

Please follow [this step-by-step guide](../../resources/GET_STARTED.md#working-on-directories-that-contain-starter-code) on how to setup your local enviornment and start working on this assignment. 

<a name="src-structure" href=""></a>
## 3. Structure inside the `src` folder

```
|- /src
|    # Navigation module
|--- /navigation
|------ Navigation.js
|    # Contains the page components
|--- /views
|------ Home.js
|------ Attributes.js
|------ Form.js
|       # Redirects to the homepage
|------ NoMatch.js
|    # Contains the routing
|--- App.js
```

<a name="task-1" href=""></a>
## 4. Task 1 - Create a navigation with the Menu and MenuItem component

The goal of this task is to have a fully functional sidebar.
The sidebar is required to navigate to the pages you will work on in the next
two tasks. This shouldn't take more than a couple of minutes as this is more an
introductory task.

<a name="task-1--existing-code" href=""></a>
### Existing code in the template

The template already contains all necessary code except for the ui components.
You don't have to worry about creating the app or compose the routing.

The page consists of three pages:

1. Homepage
1. Attributes
1. Form

The components for these pages can be found in `src/views/`, but they don't need
to be touched in order to get this working.

The `src/App.js` renders a component called `Navigation`. It already exists in
`src/navigation/Navigation.js`. This is the file that you have to work on.

<a name="task-1--completing-the-task" href=""></a>
### Completing the task

Once all steps have been completed, the sidebar should look like this:

![Finished sidebar](./assets/sidebar_finished.jpg)

As you can see, there are three menu items. These are already prepared in the
code of the navigation, but the actual components are missing.

You'll have to import both the `Menu` and the `MenuItem` components from
`@dhis2/ui`.

Then you can replace the placeholder elements (look for the `@TODO` comments)
with the components you just imported.

If all the components have been added correctly, you should be able to navigate
to the `Home`, `Attributes` and `Form` pages, which so far display nothing but
an `h1`.

<a name="task-2" href=""></a>
## 5. Task 2 - Create a Table for the attributes that are being loaded

After the sidebar has been added, you can navigate to the attributes page.
On this page some attributes are being loaded from the database. 
These should then be displayed in a table.

If you did not complete the first task, you can't navigate to this page.
You can still access is through manually changing the url to `/attributes`.

<a name="task-2--existing-code" href=""></a>
### Existing code in the template

The file you are going to work on is `src/views/Attributes.js`. It already
contains all the loading logic and will display the loading indicator to the
user ("Loading...") and the error message of something goes wrong.

The introduction to loading data from dhis2 will be held after the introduction
of the ui libraries, so for now, you won't have to worry about how this works.
There are three values (`loading`, `error` & `data`) and the `data` one is the
only one that you have to handle.

While the data is loading, it'll be `null` and once the fetching of the data
has finished & succeeded, data will have the following shape:

```js
{
    attributes: {
        attributes: [
            {
                id: string,
                displayName: string,
                unique: bool,
            }
        ]
    }
}
```

<a name="task-2--completing-the-task" href=""></a>
### Completing the task

Once all steps have been completed, the attributes page should look like this:

![Finished attributes page](./assets/finished_attributes_page.jpg)

The components required to complete the task are:

* `Table`
* `TableBody`
* `TableCell`
* `TableCellHead`
* `TableHead`
* `TableRow`
* `TableRowHead`

So first you need to import them at the top of the file. There's a comment with
`@TODO` that mentions all the required components as well.

The basic structure of the table is already in place, the comments in the jsx
portion of the code will let you know which components you need and where to
place them.

As `data.attributes.attributes` is an array, you'll have to map each item to a
table row that displays the relevant data. When one correctly, each row will
have two cells, one for the `displayName` and one for whether the attribute is
`unique` or not.

<a name="task-3" href=""></a>
## 6. Task 3 - Complete the registration form

The final task will be the one that will take most of the time.
The goal is to have a fully functional form that won't submit until all
required fields have a value and their value is not invalid.

If you did not complete the first task, you can't navigate to this page.
You can still access is through manually changing the url to `/form`.

<a name="task-3--existing-code" href=""></a>
### Existing code in the template

The form logic is done with `react-final-form`, which we use for building forms.
The setup of the form is already in place, so you don't have to worry about
setting up the react-final-form components.

The form is almost complete, the only components missing are the components
and the validators from the ui library.

The file that you will have to work on is `src/views/Form.js`.

<a name="task-3--completing-the-task" href=""></a>
### Completing the task

Once all steps have been completed, the attributes page should look like this:

![Finished form page](./assets/finished_form_page.jpg)

If the form validation fails, then the form should contains the respective
error message. In the following image all fields that have a validation
function are invalid:

![Invalid form](./assets/invalid_form.jpg)

<a name="task-3--validation" href=""></a>
#### The validation

The validation for the individual fields should be as follows:

1. `surname`
   * Can't be empty
1. `firstname`
   * Can't be empty
1. `email`
   * Can't be empty
   * Must be a valid e-mail address
1. `email-validation`
   * Can't be empty
   * Must match the value of the `email` field

The `hasValue` validator can be used to check whether a field is empty or not.

```jsx
validate={hasValue}
```

The `email` validator can be used to check whether a field is a valid email
address.

```jsx
validate={email}
```

The `createEqualTo` factory function can be used to create a validator that
makes sure the field's value matches the value of the field with supplied name.

```jsx
validate={createEqualTo('email')}
```

If a field needs multiple validators, the `composeValidators` function can be
used to use as many as needed:

```jsx
validate={composeValidators(
    email,
    hasValue,
    createEqualTo('email')
)}
```

All validators mentioned above in this task are exported directly from
`@dhis2/ui`. You can easily write your own validators in your apps. Please
refer to the docs of
[`react-final-form`](https://final-form.org/docs/react-final-form/getting-started)
for more information.

The comments with `@TODO` in the `Form.js` will tell you which components and
validators to use.

<a name="solution" href=""></a>
## 7. Solution for all three tasks

If you think you're done, you can compare your result with the solution in the `ui-library-task-solution` directory: 

```
 ── workshop-1
    ├── 02-ui-library
    │   ├── README.md
    │   ├── ui-library-task-template
    │   └── ui-library-task-solution 
```

### Submit your assignment 

When you're ready, please follow these [instructions](../../resources/GET_STARTED.md#how-to-submit-assignments) for submitting your assignment. 


