This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Monsters Rolodex Application

This application is website which presents a number of monsters and allows you to search through them. It displays the monsters that their name matches the search box content.

The app has three presentational components and the logic is inside App.js.

## Card Component

Presentational component that accepts as props a monster image, name and email. It is responsible for displaying the card container with the monster.

## CardList Component

Presentational component that accepts as props the monsters data and displays every monster using the Card component.

## SearchBox Component

Also a presentational component. It takes as props a placeholder and a method called handleChange from App.js and displays the input box where you can type and search for a monster.

## App.js

It contains a class component with a method for handling the text inside the search box and one for fetching the monsters data from a website. The render method is used for displaying the search box and card list.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
