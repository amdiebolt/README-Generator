// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license.data.license === 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license.data.license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if(license.data.license === 'Mozilla'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  else if(license.data.license === 'Unlicense'){
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  else if(license.data.license === 'none'){
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
  
  ${data.description}

## Table of Contents
  
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests) 
5. [Questions](#questions?)

<a name ='installation'></a> 
## Installation
  
  ${data.installation}

<a name ='usage'></a> 
## Usage
  
  ${data.usage}

<a name ='contributing'></a> 
## Contributing
  
  ${data.contributing}

<a name ='tests'></a>  
## Tests
  
  ${data.tests}

<a name ='licenses'></a> 
## Licenses
  
  ${renderLicenseBadge(data)}
  ${data.license}

<a name ='questions?'></a> 
## Questions?
  
  ${data.github}
  ${data.email}`
;
}

module.exports = generateMarkdown;
