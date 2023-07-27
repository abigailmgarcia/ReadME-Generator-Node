// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = function(license) {
  if (license === 'none') {
    return ''
  } else {
    return `![License ${license}](https://img.shields.io/badge/license-${license}-ff69b4)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = function(license) {
  if(license === 'MIT'){
    return `For more information please refer to license listed in repo: [License: ${license}](https://mit-license.org/)`
  } else if (license === 'Apache 2.0') {
    return `For more information please refer to License listed in repo: [License: ${license}](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license === 'GNU GPLv3') {
    return `For more information please refer to License listed in rep: [License: ${license}](https://www.gnu.org/licenses/quick-guide-gplv3.html)`
  } else {
    return ''
  };
};


// TODO: Create a function to generate markdown for README
// why is in not reading this function
const generateMarkdown = (data, sections)  => {
  const badge = renderLicenseBadge(data.License);
  const link = renderLicenseLink(data.License);
  console.log(data.Title)
  return `# ${data.Title}\n
  ${badge}\n
  ## Description\n
  ${data.Description}\n
  ## Table of Contents\n
    - [Installation](#installation)\n
    - [Usage](#usage)\n
    - [Contributions](#contributions)\n
    - [Credits](#credits)\n
    - [License](#license)\n
    - [Tests](#test)\n
    - [Questions](#questions)\n
  ## Installation\n
  ${sections.Installation}\n
  ## Usage\n
  ${data.Usage}\n
  ${sections.screenshot}\n
  ${sections.walkthrough}\n
  ## Contributors\n
  ${sections.contributors}\n
  ## Credits\n
  ${sections.credits}\n
  ## License\n
  ${link}\n
  ## Tests\n
  ${sections.Tests}\n
  ## Questions\n
  Please visit my GitHub profile for more of my work:
  ${data.name}${data.github}\n
  For any questions about this application you can contact:
  ${data.name}${data.Email}
`;
}


module.exports = { generateMarkdown };
