// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the usages of your project?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests were done for your project?',
      },
      {
          type: 'checkbox',
          name: 'license',
          message: 'What licenses did you use?',
          choices: ['MIT', 'Mozilla', 'Apache', 'Unlicense', 'none']
      },
      {
          type: 'input',
          name: 'github',
          message: 'What is your github username?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email?',
        },
    ])
    .then((answers) => {
        console.log(answers)
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
