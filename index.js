// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
// TODO: Create an array of questions for user input
  {  type: "input",
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
    message: "How is this app used? Provide Instructions",
    name: "Usage"
}, {
    type: "list",
    message: " What License are you using?",
    choices: ['None', 'MIT', 'Apache2.0', 'GNUGPLv3'],
    name: "License",
    default: "None"
}, {
    type: "input",
    message: "Are there any contributors to your project?",
    name: "Contributors"
}, {
    type: "confirm",
    message: "Did you use any resources to help you? ei: third parties or tutorials",
    name: "Credits"
},  {
    type: 'input',
    name: 'creditURL',
    message: 'Enter the URL/Filepath for the collaborator, third-party asset, or tutorial:',
    filter: (input) => `(${input})`,
    when: (data) => data.creditURL // Only displays answer if the installation question is given a truthy value
  }, {
    type: "input",
    message: "How can you test this app?",
    name: "Tests"
}, {
    type: "input",
    messages: "Contact info for any inquirers.",
    name: "Questions"
}, {
    type: "input",
    messages: "What is your github username?",
    name: "Username",
    filter: (input) => `(malito:${input})`,
}, {
    type: "input",
    messages: "What is your email address?",
    name: "Email",
    filter: (input) => `(mailto:${input})`,
}
])
.then ((data) => {
    const markdown = generateMarkdown();
    writeToFile('README.md', markdown);
})
.catch((err) =>{
    console.log(err);
})
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        console.log(fileName);
        console.log(data);
        if(err) {
            return console.log(err);
        } else {
            console.log(" README.md file generated success!");
        }
    });
}

// then((data) => {
//     const sections = {
//         credits: data.credits ? `${data.creditText}${data.creditURL}` : '',
//     };
//     fs.writeFile('README.mf', generateMarkdown.generateMarkdown(data, sections), (err) =>{
//         err ? console.log(err) :  console.log('success!')
//     })
// })


// Function call to initialize app
init();
