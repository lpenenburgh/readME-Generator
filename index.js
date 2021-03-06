// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
//const questions = [];

const questions = [
    {
      type: 'input',
      name: 'github',
      message: 'What is you GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide any installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions for use',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commands should be run to run tests?',
    },

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => 
    err ? console.log(err) : console.log('readme file has been generated')
  );
}



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
      const markdown = generateMarkdown(response);
      writeToFile('example.md', markdown);
      
  })
}

// Function call to initialize app
init();
