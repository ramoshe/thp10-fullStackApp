# FSJS Project 10 - Full Stack App with React and a REST API

## To Do List
- [] Add support for user authentication (step 7)
- [] Finish building Course components (step 5)
- [] Add react-markdown for text formatting (step 11)
- [] Configure protected routes (step 8)
- [] Restrict access to updating and deleting courses (step 9)
- [] Display validation errors (step 10)
- [] Add comments
- [] EC: Error components
- [] EC: save auth user in cookie
- [] EC: redirect to prev page after signin

## How To
1. Download all the project files
2. In the console, navigate to the `api` directory and run `npm install`
3. In the console, navigate to the `client` directory and run `npm start`
4. In your browser, go to http://localhost:3000/

## Using Git Subtree for the API
The API contained in the `api` folder is another repo that has been added to this repo as a subtree.
You can see the original API repo here: 

If you want to pull in new commits from the subtree, run this command:
`git subtree pull --prefix api https://github.com/ramoshe/thp9-RESTAPI.git main --squash`

If you make any chages in the `api` directory they will be stored in this repo's logs only. In order to update the subtree remote repo, run this command:
`git subtree push --prefix api https://github.com/ramoshe/thp9-RESTAPI.git main --squash`

## Project Description
*(from Treehouse)*

In your final project, you’ll use React to create a client for your existing school database REST API (that you created in a previous project). The full stack application will provide a way for users to administer a school database containing information about courses: users can interact with the database by retrieving a list of courses, viewing detail for a specific course, as well as creating, updating and deleting courses in the database.

In addition, the project will require users to create an account and sign in to make changes to the database. Implementing these features will push your React skills to new heights.

To complete this project, you’ll use your knowledge of React, JSX, React Router, React Context API, and Create React App.

After using the Create React App tool to set up your initial project, you'll:

Use JavaScript and JSX to build out the components for your application in a modular fashion.
Use React Router to set up your routes.
Use the Fetch API or a tool like Axios to fetch data from your REST API.
Allow users to sign up and use basic authentication to support users signing in.
Add to the supplied CSS to personalize the project.
