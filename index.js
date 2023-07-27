// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
// TODO: Create an array of questions for user input
  {  
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
}, 
{
    type: "input",
    message: "Why did you build this project? What problem did it solve? What is this project about?",
    name: "Description"
}, 
{
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, 
{
    type: "confirm",
    message: "What does the user need to do to install this application?",
    name: "Installation",
    default: false,
}, 
{
    type: "input",
    name: "installSteps",
    message: "Enter the steps required for installation:",
    filter: (input) => `${input}`,
    when: (data) => data.Installation, //only displays if truthy
},
{
    type: "input",
    message: "How is this app used? Provide Instructions",
    name: "Usage"
}, 
{
    type: "confirm",
    name: "screenshot",
    message: "would you like to add a screenshot?",
    default: false,
},
{
    type: "input",
    name: "screenshotText",
    message:"enter a description for the screenshot alt text:",
    filter: (input) => `![${input}]`,
    when: (data) => data.screenshot,
},
{
    type: "input",
    name: "screenshotURL",
    message: "enter the url/filepath for the screenshot:",
    filter: (input) => `(${input})`,
    when: (data) => data.screenshot,
},
{
    type: "confirm",
    name: "walkthrough",
    message: "would you like to add a video walkthrough?",
    default: false,
},
{
    type: "input",
    name: "walkthroughtext",
    message: "short description of video:",
    filter: (input)=> `[${input}]`,
    when: (data) => data.walkthrough,
},
{
    type: "input",
    name: "walkthroughURL",
    message: "enter the url/filepath for the video:",
    filter: (input) => `[${input}]`,
    when: (data) => data.walkthrough,
},
{
    type: "list",
    message: " What License are you using?",
    choices: ['None', 'MIT', 'Apache2.0', 'GNUGPLv3'],
    name: "License",
    default: "None"
}, 
{
    type: "confirm",
    message: "Are there any contributors to your project?",
    name: "contributors",
    default: true,
}, 
{
    type: 'input',
    name: 'contributorText',
    message: 'Enter a short message for the contributor source hyperlink:',
    filter: (input) => `[${input}]`,
    when: (data) => !data.contributors
},
{
    type: "confirm",
    message: "Did you use any resources to help you? ei: third parties or tutorials",
    name: "credits",
    default: false
}, 
{
    type: 'input',
    name: 'creditURL',
    message: 'Enter the URL/Filepath for the collaborator, third-party asset, or tutorial:',
    filter: (input) => `(${input})`,
    when: (data) => data.creditURL // Only displays answer if the installation question is given a truthy value
  }, 
  {
    type: "input",
    message: "How can you test this app?",
    name: "Tests"
}, 
{
    type: "input",
    messages: "Contact info for any inquirers.",
    name: "name",
    filter: (input) => `[${input}]`,
}, 
{
    type: "input",
    messages: "What is your github username?",
    name: "github",
    filter: (input) => `(https://github.com/${input})`,
}, 
{
    type: "input",
    messages: "please provide email address:",
    name: "Email",
    filter: (input) => `(mailto:${input})`,
}
])


.then((data) => {
    const sections = {
        Installation: data.Installation ? `-${data.installSteps}` : '',
        screenshot: data.screenshot ? `${data.screenshotText}${data.screenshotURL}` : '', 
        walkthrough: data.walkthrough ? `${data.walkthroughtext}${data.walkthroughURL}` : '',
        credits: data.credits ? `${data.creditURL}` : '',
        contributors: data.contributors ? '[Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt' : `${data.contributorText}${data.contributorURL}`,
        tests: data.Tests ? `${data.testDescription}\n ${data.testAltText} ${data.testURL}` : '',
      
    };
    fs.writeFile('README.md', generateMarkdown.generateMarkdown(data, sections), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README.md file generated successfully!");
        }
    });
})
}

// Function call to initialize app
init();
