function renderLicenseBadge(license) {
  if(license.license === 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license.license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if(license.license === 'Mozilla'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  else if(license.license === 'Unlicense'){
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  else if(license.license === 'none'){
    return ''
  }
}

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
5. [Questions](#questions)

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
  
  This project uses the ${data.license} license
  
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  

<a name ='questions'></a> 
## Questions?
  
  Reach me on Github here: [${data.github}](https://github.com/${data.github})
  
  or
  
  Email here : ${data.email}`
;
}

module.exports = generateMarkdown;
