// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generatorMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
}, {
    Type: "input",
    message: "Why did you build this project? What problem did it solve? What is this project about?",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to do to install this application?",
    name: "Installation"
}, {
    type: "input",
    message: "How is this app used?",
    name: "Usage"
}, {
    type: "input",
    message: " What License are you using?",
    name: "License"
}, {
    type: "input",
    message: "Are there any contributors to your project?",
    name: "Contributors"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests"
}, {
    type: "input",
    messages: "contact info for any inquirers",
    name: "Questions"
}, {
    type: "input",
    messages: "What is your github username and email?",
    name: "Contact Info"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if(err) {
            return console.log(err);
        } else {
            console.log("success!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data);
        });
}

// Function call to initialize app
init();
