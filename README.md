# The Burger App (Using Handlebars and ORM)

## App Description
* A restaurant app that lets users input the names of burgers they'd like to eat.

## Burger App Overview
* server.js (Sets up our app to use express and to listen at a port.)
* package.json
* package-lock.json
### config
* connection.js
* orm.js
### controllers
* routes.js (Routes our functionality)
### db
* schema.sql
* seeds.sql
### models
* burgers.js (exporting the database function for the controller orm.js)
### public
* assets
#### css
* burger_style.css (Main stylesheet.)       
* reset.css (Resets any style that the browser might have preloaded.)
#### img (All images used in project.)
#### js
* burgers.js (Runs the click functionality of the app.)
### views
* layouts
* main.handlebars (The layout that our index.handlebars references.)
* index.handlebars (Dynamically holds html for use in the main file.)

## Instructions to Run the App
* Hosted on Heroku here: https://guarded-depths-68470.herokuapp.com/

* OR clone the file from github. https://github.com/Sandy12-code/burger

* Install all dependencies needed to run the program ("npm install").

* Run the applications using node in the command line ("node server.js") and open up browser with correct port to see the magic.

## Technologies Used
* CSS3
* Bootstrap 4
* JavaScript
* jQuery
* Node
* NPMs: Express, express-handlebars, Handlebars, body-parser, mysql2
## This app was created entirely by Sandy Enow