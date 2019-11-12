# A sequelized version of the Burger App

## PROBLEM/SOLUTION
* A restaurant app that lets users input the names of burgers they'd like to eat.

## Burger Overview
* server.js (Sets up our app to use express and to listen at a port.)
* package.json
* package-lock.json
### config
* config.json file created by sequelize
### controllers
* burgers_controller.js (Routes our functionality)
### models
* burgers.js (Sequelize model for burger data.)
* index.js (Boiler plate Sequelize file.)
### public
* assets
#### css
* burger_style.css (Main stylesheet.)       
* reset.css (Resets any style that the browser might have preloaded.)
#### img (All images used in project.)
#### js
* app.js (Runs the click functionality of the app.)
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
* Animate.css
* Bootstrap 4
* JavaScript
* Node
* NPMs: Express, Handlebars, dotenv, Sequelize, Sequelize-cli
## This app was created entirely by Sandy Enow