# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![image](https://user-images.githubusercontent.com/73156364/120079440-5e2dc100-c0e6-11eb-9030-4e8e714cc89c.png)

The reasons I chose React to build this project are:

1. Writing and rendering subcomponents are simpler.
2. It has strong reusability and reduces headaches when dealing with logic changes down the line
3. The Virtual DOM feature of react ensures faster rendering
4. By being able to organize the app into child structures, small changes wont affect parent files
5. It is focused, and easy-to-read

## Code Walkthrough

The bulk of the app is located in the `src` folder. Because this app isn't as complex, only 1 separate component was needed to be created aside from the base `App.js` in `Form.js` where most of the code is happening.

The first 3 lines of Form.js import React with its very useful hooks, `useReducer` and `useState`. It also imports the css file for this component and the material-ui components it'll be using. (lines 1-3)

Before the component function, a `formReducer` state is initialized. The `useReducer` Hook to create a formData object and a `setFormData` function. For the `reducer` function, this will pull the name and value from the `event.target` object and update the state by spreading the current state while adding the name and value at the end. This will create a state object that preserves the current state while overwriting specific values as they change. (lines 5-10)

The functional component is just plain Javascript that takes in props as arguments and finally renders the react element. First, the initial states of the form and the selections of the form are declared using `useState`. (lines 12-24)

The `handleSubmit` function handles the submit event when the user clicks the subscribe button. It firsts shows the error message if it has not been already shown while disabling the subscribe button for 2 seconds. After a second submit click, the function checks which options have been selected and displays a message accordingly. Finally, the data and values submitted through the form are passed in and logged onto the console as `.json` objects. (lines 26-54)

The `handleChange` function sets the `state` of the newsletter options whenever theyre clicked on, then changes the `state` of the `checkbox`.(lines 52-54)

The `return` statement wraps the entire body of the html in a `form` that references back to the `handleSubmit` function when the `onSubmit` action is triggered. To give it a similar look to the given design, I used a `Paper`/`Box` component that is centered within page. Within the Paper component is the title and subtitle of the form. Below that is a `FormControl` and `FormControlGroup` container components to hold all of the newsletter options in `Checkbox` components. Their `onChange` events callback to the `handleChange` function and are recorded as `data` values depending on their `state` when the form is submitted. (lines 59-141)

To give more similarity to the given design, I wrapped the email submission and optOut option within another `Paper` component that elevates above the main Paper component. The email field and subscribe button are put into `Grid` items to maintain its styling, and the optOut option is used as another `Checkbox` component within a `FormControlLabel`. Then finally, the entire function is exported as a `Form` component.(lines 142-176)

By exporting this, it is able to be imported by `App.js` and rendered onto the `App` component, which is ultimately rendered onto the Virtual DOM where it is able to be seen on the browser. 

## To Run

Clone this repo or download the zip file

`cd` into `your repository`

run `npm install` in terminal

`npm start` to run the app locally in the browser


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


