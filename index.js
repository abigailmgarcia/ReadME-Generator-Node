// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generatorMarkdown = require('./Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
}, {
    Type: "input",
    message: "",
    name: ""
}, {
    type: "input",
    message: "",
    name: ""
}, {
    type: "input",
    message: "",
    name: ""
}, {
    type: "input",
    message: "",
    name: ""
}, {
    type: "input",
    message: "",
    name: ""
}, {
    type: "input",
    message: "",
    name: ""
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
