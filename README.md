# react-redux-express_add_to_legacy

Express app 
- on master branch

React TODO app
- on react-app branch

## Idea
To have a left menu that loads 3 different react apps that are self contained.
THe main app is an Express app that houses the left menu. The left menu will be links using Express routing to load an HTML page that contains the react app w/ redux

### WHY 
We have one over arching application that contains multiple applications.
A left menu takes you to each separate application within the umbrella application. 
It is best to have each application self contained and tested inside its own Module (testable) maybe even as an NPM module brought in from another repo. 
This will allow multiple devs to work on a react application.

FURTHER DETAILS : 
The react app will make THUNK calls to a microservice API endpoint : This can be another express app

| TASKS | STATUS |
| -------- | --------- |
| create left menu | ready |
| create express routes in routes folder | ready |
| create three react apps /w redux using create-react-app and eject : (1) is already made (todo app - on react-app branch) | ready |
| verify each react app loads with its own redux state and separate from the others | ready |

| CHANGES |
|---- |
| after eject of create react app : go to /config/webpack.config.js : next find "HtmlWebpackPlugin" under plugins and *filename: "<name>.html"* so that we do not use index.html 