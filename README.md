# FSJS Project 10: Full Stack App with React and a REST API

## How To Use
 - You can view a live version of this project here: https://g.ramoshe.com/thp10-fullStackApp
 - If you want a local copy of the project:
    1. Download the files: https://github.com/ramoshe/thp10-fullStackApp/archive/refs/heads/main.zip
    2. In the terminal, navigate to the `api` folder
    3. Run `npm install` then `npm run seed` and then `npm start` 
    4. In a separate terminal, navigate to the `client` folder and
    5. Run `npm install` and then `npm start`
    6. In your browser, go to http://localhost:3000/

## Git Subtree for the API
The API contained in the `api` folder is another repo that has been added to this repo as a subtree.
You can see the original API repo here: https://github.com/ramoshe/thp9-RESTAPI

### How to Manage Subtree
To pull in new commits from the original repo, run this command:
`git subtree pull --prefix api https://github.com/ramoshe/thp9-RESTAPI.git main --squash`

Any chages in the `api` directory will be stored in this repo's logs only. In order to update the original repo, run this command:
`git subtree push --prefix api https://github.com/ramoshe/thp9-RESTAPI.git main --squash`

## Project Description
*From Treehouse*

In your final project, you’ll use React to create a client for your existing school database REST API (that you created in a previous project). The full stack application will provide a way for users to administer a school database containing information about courses: users can interact with the database by retrieving a list of courses, viewing detail for a specific course, as well as creating, updating and deleting courses in the database.

In addition, the project will require users to create an account and sign in to make changes to the database. Implementing these features will push your React skills to new heights.

To complete this project, you’ll use your knowledge of React, JSX, React Router, React Context API, and Create React App.

After using the Create React App tool to set up your initial project, you'll:

Use JavaScript and JSX to build out the components for your application in a modular fashion.
Use React Router to set up your routes.
Use the Fetch API or a tool like Axios to fetch data from your REST API.
Allow users to sign up and use basic authentication to support users signing in.
Add to the supplied CSS to personalize the project.

## Notes
Favicon from https://favicon.io/emoji-favicons/bookmark
Color pallette generated using Coolors https://coolors.co/16425b-235476-2f6690-3a7ca5-5ea0be-81c3d7-add0d7-f0ead5-cd5700
