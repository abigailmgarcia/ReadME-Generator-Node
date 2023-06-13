// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = function(license) {
  if (license === 'none') {
    return ''
  } else {
    return `![License ${license}]`
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
  console.log(data.title)
  return `# ${data.title}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributions](#contributions)\n
  - [Credits](#credits)\n
  - [License](#license)\n
  - [Tests](#test)\n
  - [Questions](#questions)\n
  ## Installation\n
  ${sections.installation}\n
  ## Usage\n
  ${data.usage}\n
  ## Contributions\n
  ${data.contributions}\n
  ## Credits\n
  ${section.credits}\n
  ## License\n
  ${section.license}\n
  ## Tests\n
  ${section.tests}\n
  ## Questions\n
  Please visit my GitHub profile for more of my work:
  ${data.name}${data.github}\n
  For any questions about this application you can contact:
  ${data.name}${data.email}

`;
}

module.exports = {generateMarkdown};
