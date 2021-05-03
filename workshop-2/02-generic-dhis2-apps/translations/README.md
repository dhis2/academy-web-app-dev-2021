## Translations: Task Instructions 

**IMPORTANT**: Please remember to sign-in to your GitHub account and FORK this project before you continue with this exercise  

Once you get to the sign in page, you will need to enter the following:

```
server: https://academy.demos.dhis2.org/web-app/
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

### TASK 1 - Import `i18n`

- Check the comment starting with `@TODO-1` on `App.js`
- **REMEMBER**: App Platform generates `src/locales/index.js` which **MUST** be imported somewhere in the app!  Usually, this is in `src/App.js` 

### TASK 2 - Add a simple translation  

- Check comment `@TODO-2` and follow the instructions 
- How to create a translation file?  
    - Go to the `i18n` folder, you'll see the `en.pot` file, copy all the content of this file 
    - Create a new one called `fr.po` and paste that content here, add the French strings under the English ones
    - Note that `en.pot` is our template and `fr.po` is where you can add your translations (for Spanish it would be `es.po` and so on)
- **REMEMBER**: In order to generate the translation files, you would need to **restart the server** or run `yarn start` from the terminal (see below for more information on this)

### TASK 3 - Use interpolation for dynamic values

- Check comment `@TODO-3` and follow the instructions
- The goal here is to dynamically translate strings using interpolation 
- How to add a variable and pass a second object? Here's a simple example:

```js
const todaysDate = 'Wednesday'
i18n.t('Hello! Today is {{date}}', {date: todaysDate})
```

- Remember to **restart the server** or run `yarn start` after completing this task 

#### TIPS 

- After making hardcoded strings translatable in TASK 2 and 3, remember to run `yarn start` from the Codesandbox terminal: see [here](https://github.com/dhis2/academy-web-app-dev-2021/blob/main/resources/CODESANDBOX.md#open-a-terminal-window-to-issue-commands) on how to open another terminal window
- Another option is to **restart the server**, see [here](https://github.com/dhis2/academy-web-app-dev-2021/blob/main/resources/CODESANDBOX.md#restarting-the-server) 
- In order to see the results of the translated strings into French in this case, you could do the following: 
    - In your application, click on the user avatar (JT)
    - Go to `Settings` and then got to `Edit user settings` and change the interface language from English to French 
    - On your browser, click to go back to your application to see if the change is there 
    - If you don't see the translated strings yet, make sure to run `yarn start` and refresh the browser 

#### Resources 

-   To learn more about interpolation, [see i18Next docs](https://www.i18next.com/translation-function/interpolation) for more information
