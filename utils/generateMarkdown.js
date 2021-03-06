// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge= ""
  switch(license) {
    case 'GNU AGPLv3':
      badge= '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
      break;
    case 'GNU GPLv3':
      badge= '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'GNU LGPLv3':
      badge= '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
      break;
    case 'Mozilla Public License 2.0':
      badge= '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    case 'Apache License 2.0':
      badge= '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'MIT License':
      badge= '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;   
    case 'Boost Software License 1.0':
      badge= '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'The Unlicense':
      badge= '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      break;
    default:
      badge = ""
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""

  switch(license) {
    case 'GNU AGPLv3':
      licenseLink= 'https://www.gnu.org/licenses/agpl-3.0'
      break;
    case 'GNU GPLv3':
      licenseLink= 'https://www.gnu.org/licenses/gpl-3.0'
      break;
    case 'GNU LGPLv3':
      licenseLink= 'https://www.gnu.org/licenses/lgpl-3.0'
      break;
    case 'Mozilla Public License 2.0':
      licenseLink= 'https://opensource.org/licenses/MPL-2.0'
      break;
    case 'Apache License 2.0':
      licenseLink= 'https://opensource.org/licenses/Apache-2.0'
      break;
    case 'MIT License':
      licenseLink= 'https://opensource.org/licenses/MIT'
      break;   
    case 'Boost Software License 1.0':
      licenseLink= 'https://www.boost.org/LICENSE_1_0.txt'
      break;
    case 'The Unlicense':
      licenseLink= 'http://unlicense.org/'
      break;
    default:
      licenseLink = ""
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license || license === 'No License') {
      return "";
    } else {
      return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
    }
  
}
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions?
You can reach me on my Github:
${data.github}\n
Or email me at:
${data.email}

`;
}

module.exports = generateMarkdown;
