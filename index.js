const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

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
        writeToFile('READMEexample.md', generateMarkdown(answers))
    })
}

init();
