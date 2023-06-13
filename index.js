// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils')

const generatorMarkdown = require('./utils/generateMarkdown')

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
// function init() {
//     inquirer.prompt(questions)
//         .then(function(data) {
//             writeToFile("README.md", generatorMarkdown(data));
//             console.log(data);
//         });
// }

// Function call to initialize app
init();
