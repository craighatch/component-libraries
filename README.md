# Component Libraries

## Set Up
- run `npm install`
- run `npm start`

## Exercises
1. (Guided) Finish the styling in [home.component.js](src/components/home.component.js) such that the main area takes up as much space as possible (with the footer being 50 pixels of whitespace at the bottom)
1. The code in the [main-content.component.js](src/components/main/main-content.component.js) is not very `DRY`.  Refactor this code to a reuseable component. Use makeStyles to style the text like the [Credera website](credera.com) (only worry about font color and size to start)
1. Use the Material UI [Menu](https://material-ui.com/components/menus/#menus) to give functionality to the [header.component.js](src/components/header/header.component.js).  Clicking on each of the provided menu items should print the Menu item title to the console.
     - You may ignore the `findDOMNode is deprecated in StrictMode` warning if you use the examples provided by Material UI